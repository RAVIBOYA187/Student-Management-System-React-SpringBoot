package org.jsp.studentmanagmentsystem.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dto.Trainer;
import org.jsp.studentmanagmentsystem.repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TrainerDao {

	@Autowired
	private TrainerRepository trainerRepository;
	
	
	public Optional<Trainer> findTrainerById(int id) {
		
		return trainerRepository.findById(id);
	}

	public Trainer saveTrainer(Trainer trainer) {
		
		return trainerRepository.save(trainer);
	}

	public Trainer updateTrainer(Trainer trainer) {
		
		return trainerRepository.save(trainer);
	}

	public List<Trainer> findAllTrainers() {
		
		return trainerRepository.findAll();
	}

	public Trainer findTrainerByEmail(String email) {
		return trainerRepository.findTrainerByEmail(email);
	}

	public void deleteTrainer(Trainer t) {
		
		trainerRepository.delete(t);
		
	}
}
