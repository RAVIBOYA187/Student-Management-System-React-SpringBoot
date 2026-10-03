package org.jsp.studentmanagmentsystem.controller;

import java.util.List;

import org.jsp.studentmanagmentsystem.dto.Batch;
import org.jsp.studentmanagmentsystem.service.BatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class BatchController {

	@Autowired
	private BatchService batchService;
	
	@GetMapping("/findbatchbyId/{id}")
	public Batch findBatchById(@PathVariable String id) {
		return batchService.findBatchById(id);
	}
	
	@PostMapping("/savebatch")
	public Batch saveBatch(@RequestBody Batch batch) {
		return batchService.saveBatch(batch);
	}
	
	@PutMapping("/updatebatch")
	public Batch updateBatch(@RequestBody Batch batch) {
		return batchService.updateBatch(batch);
	}
	
	// find all batches
	@GetMapping("/findallbatches")
	public List<Batch> finAllBatches(){
		return batchService.finAllBatches();
	}
	
	// add a student to a batch
	@PutMapping("/addastudenttoabatch/{student_id}/{batch_id}")
	public Batch addAStudentToABatch(@PathVariable int student_id, @PathVariable String batch_id) {
		return batchService.addAStudentToABatch(student_id,batch_id);
	}
	
	
	// delete a student from a batch
	@PutMapping("/removeastudentfromabatch/{student_id}/{batch_id}")
	public Batch removeAStudentFromABatch(@PathVariable int student_id, @PathVariable String batch_id) {
		return batchService.removeAStudentFromABatch(student_id,batch_id);
	}
	
	// assign trainer to a batch
	@PutMapping("/assignatrainertoabatch/{trainer_id}/{batch_id}")
	public Batch assignATrainerToABatch(@PathVariable int trainer_id, @PathVariable String batch_id ) {
		return batchService.assignATrainerToABatch(trainer_id,batch_id);
	}
	
	
	// delete trainer from a batch
	@PutMapping("/removeatrainerfromabatch/{trainer_id}/{batch_id}")
	public Batch removeATrainerFromABatch(@PathVariable int trainer_id, @PathVariable String batch_id) {
		return batchService.removeATrainerFromABatch(trainer_id,batch_id);
	}
	
	// delete batch
	@DeleteMapping("/deletebatchbyid/{batch_id}")
	public Batch deleteBatchById(@PathVariable String batch_id) {
		return batchService.deleteBatchById(batch_id);
	}
	
	
	
}
