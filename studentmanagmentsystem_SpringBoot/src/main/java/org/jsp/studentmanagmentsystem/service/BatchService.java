package org.jsp.studentmanagmentsystem.service;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dao.BatchDao;
import org.jsp.studentmanagmentsystem.dao.StudentDao;
import org.jsp.studentmanagmentsystem.dao.TrainerDao;
import org.jsp.studentmanagmentsystem.dto.Batch;
import org.jsp.studentmanagmentsystem.dto.Student;
import org.jsp.studentmanagmentsystem.dto.Trainer;
import org.jsp.studentmanagmentsystem.exceptions.BatchAlreadyExistException;
import org.jsp.studentmanagmentsystem.exceptions.BatchNotFoundException;
import org.jsp.studentmanagmentsystem.exceptions.StudentNotFoundException;
import org.jsp.studentmanagmentsystem.exceptions.TrainerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BatchService {

	@Autowired
	private BatchDao batchDao;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private TrainerDao trainerDao;
	
	public Batch findBatchById(String id) {
		Optional<Batch> ob = batchDao.findBatchById(id);
		if(ob.isPresent()) {
			return ob.get();
		}
		throw new BatchNotFoundException(" batch not exist with id : "+id);
	}
	
	
	public Batch saveBatch(Batch batch) {
		Optional<Batch> ob = batchDao.findBatchById(batch.getId());
		if(ob.isPresent()) {
			throw new BatchAlreadyExistException("Batch already exist with id : "+ batch.getId());
		}
		return batchDao.saveBatch(batch);
	}
	
	public Batch updateBatch(Batch batch) {
		Optional<Batch> ob = batchDao.findBatchById(batch.getId());
		if( ob.isPresent()) {
			return batchDao.updateBatch(batch);
		}
		throw new BatchNotFoundException("for updating batch not exist with id : "+batch.getId());
	}
	
	
	public List<Batch> finAllBatches() {
		return batchDao.finAllBatches();
	}

	public Batch addAStudentToABatch(int student_id, String batch_id) {
		Optional<Student> os = studentDao.findStudentById(student_id);
		Optional<Batch> ob = batchDao.findBatchById(batch_id);
		
		if(os.isPresent()) {
			if(ob.isPresent()) {
				Batch b = ob.get();
				Student s = os.get();
				
				if(!s.getBatches().contains(b)) {
	    				s.addBatch(b);
				}
				if(!b.getStudents().contains(s)) {
					b.addStudent(s);
				}
				return batchDao.updateBatch(b);
			}
			throw new BatchNotFoundException("for adding a student to a batch .. there is no batch exist with id : "+batch_id);
		}
		throw new StudentNotFoundException("for adding a student to a batch ..there is no student with id "+ student_id);
	}
	
	public Batch removeAStudentFromABatch(int student_id, String batch_id) {
		Optional<Student> os = studentDao.findStudentById(student_id);
		Optional<Batch> ob = batchDao.findBatchById(batch_id);
		
		if(os.isPresent()) {
			if(ob.isPresent()) {
				Batch b = ob.get();
				Student s = os.get();
				
				if(s.getBatches().contains(b)) {
	    				s.getBatches().remove(b);
				}
				if(b.getStudents().contains(s)) {
					b.getStudents().remove(s);
				}
				return batchDao.updateBatch(b);
			}
			throw new BatchNotFoundException("for removing a student from a batch .. there is no batch exist with id : "+batch_id);
		}
		throw new StudentNotFoundException("for removing a student from a batch ..there is no student with id "+ student_id);
	}


	public Batch assignATrainerToABatch(int trainer_id, String batch_id) {
		Optional<Trainer> ot = trainerDao.findTrainerById(trainer_id);
		Optional<Batch>  ob = batchDao.findBatchById(batch_id);
		
		if(ot.isPresent()) {
			if(ob.isPresent()) {
				Trainer t = ot.get();
				Batch b = ob.get();
				
				if(!t.getBatches().contains(b)) {
					t.addBatch(b);
				}
				b.setTrainer(t);
				
				return batchDao.updateBatch(b);				
			}
			throw new BatchNotFoundException("for assigning a trainer to a batch .. there is no batch with id : "+batch_id);
		}
		throw new TrainerNotFoundException("for assigning a trainer to a batch ..there is no trainer with id "+ trainer_id);
	}


	public Batch removeATrainerFromABatch(int trainer_id, String batch_id) {
		Optional<Trainer> ot =  trainerDao.findTrainerById(trainer_id);
		Optional<Batch> ob = batchDao.findBatchById(batch_id);
		
		if(ot.isPresent()) {
			if(ob.isPresent()) {
				Trainer t = ot.get();
				Batch b = ob.get();
				
				if(t.getBatches().contains(b)) {
					t.getBatches().remove(b);
					trainerDao.updateTrainer(t);
				}
				b.setTrainer(null);
				
				return batchDao.updateBatch(b);
			}
			throw new BatchNotFoundException("for removing a trainer from a batch .. there is no batch with id : "+batch_id);
		}
		throw new TrainerNotFoundException("for removing a trainer from a batch ..there is no trainer with id "+ trainer_id);
	}


	public Batch deleteBatchById(String batch_id) {
		Optional<Batch> ob = batchDao.findBatchById(batch_id);
		
		if(ob.isPresent()) {
			Batch b = ob.get();
			Trainer t = b.getTrainer();
			if(t != null) {
				t.getBatches().remove(b);
				trainerDao.updateTrainer(t);
			}
			b.setTrainer(null);
			
			List<Student> students = b.getStudents();
			if(!students.isEmpty()) {
				for(Student s:students) {
					s.getBatches().remove(b);
					studentDao.updateStudent(s);
				}
			}
			 batchDao.deleteBatch(b);
			 
			 return b;
		}
		throw new BatchNotFoundException("for deleting a batch .. there is no batch with id : "+batch_id);

	}


	

	

	

	

}
