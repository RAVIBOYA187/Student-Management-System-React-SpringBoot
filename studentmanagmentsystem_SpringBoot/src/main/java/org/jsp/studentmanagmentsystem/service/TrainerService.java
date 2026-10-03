package org.jsp.studentmanagmentsystem.service;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dao.TrainerDao;
import org.jsp.studentmanagmentsystem.dto.Batch;
import org.jsp.studentmanagmentsystem.dto.Trainer;
import org.jsp.studentmanagmentsystem.exceptions.StudentAlreadyExistException;
import org.jsp.studentmanagmentsystem.exceptions.StudentNotFoundException;
import org.jsp.studentmanagmentsystem.exceptions.TrainerAlreadyExistException;
import org.jsp.studentmanagmentsystem.exceptions.TrainerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainerService {

	@Autowired
	private TrainerDao trainerDao ;
	
	@Autowired
	private BatchService batchService;

	public Trainer findTrainerById(int id) {
		
		Optional<Trainer> ot = trainerDao.findTrainerById(id);
		
		if( ot.isPresent()) {
			return ot.get();
		}
		throw new TrainerNotFoundException("there is no trainer with id "+ id);

	}

	public Trainer saveTrainer(Trainer trainer) {
		Optional<Trainer> ot = trainerDao.findTrainerById(trainer.getId());

		if(ot.isPresent()) {
			throw new TrainerAlreadyExistException("trainer already exist with id : "+ trainer.getId());
		}
		return trainerDao.saveTrainer(trainer);
	}

	public Trainer updateTrainer(Trainer trainer) {
		Optional<Trainer> ot = trainerDao.findTrainerById(trainer.getId());
		
		if(ot.isPresent()) {
			return trainerDao.updateTrainer(trainer);
		}
		throw new TrainerNotFoundException("for updating trainer not exist with id : "+trainer.getId());
	}

	public List<Trainer> findAllTrainers() {
	
		return trainerDao.findAllTrainers();
	}

	public boolean trainerLogin(String email, String password) {
		Trainer t = trainerDao.findTrainerByEmail(email);
		
		if( t != null) {
			if(t.getPassword().equals(password)) {
				return true;
			}
			throw new TrainerNotFoundException("wrong password machaa..");
		}
		throw new TrainerNotFoundException("wrong email machaa..");
	}

	public Trainer deleteTrainerById(int id) {
		
		Optional<Trainer> ot = trainerDao.findTrainerById(id);
		
		if(ot.isPresent()) {
			
			Trainer t = ot.get();
			List<Batch> batches = t.getBatches();
			
			for(Batch b : batches) {
				
				b.setTrainer(null);
				batchService.updateBatch(b);
			}
			batches.clear();
			
			trainerDao.deleteTrainer(t);
			
			return t;
		}

		throw new TrainerNotFoundException("for deleting trainer not exist with id : "+id);

	}
	
	
}
