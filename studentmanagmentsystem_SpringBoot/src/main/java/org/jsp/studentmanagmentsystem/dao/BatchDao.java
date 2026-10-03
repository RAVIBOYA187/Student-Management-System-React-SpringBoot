package org.jsp.studentmanagmentsystem.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dto.Batch;
import org.jsp.studentmanagmentsystem.repository.BatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BatchDao {

	@Autowired
	private BatchRepository batchRepository;
	
	public Optional<Batch> findBatchById(String id) {
		 return batchRepository.findById(id);
	}
	
	public Batch saveBatch(Batch batch) {
		return batchRepository.save(batch);
	}

	public Batch updateBatch(Batch batch) {
		return batchRepository.save(batch);
	}

	public List<Batch> finAllBatches() {
		return batchRepository.findAll();
	}

	public void deleteBatch(Batch b) {
		batchRepository.delete(b);
	}

	

}
