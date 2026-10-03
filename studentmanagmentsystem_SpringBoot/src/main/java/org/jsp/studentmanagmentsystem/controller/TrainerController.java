package org.jsp.studentmanagmentsystem.controller;

import java.util.List;

import org.jsp.studentmanagmentsystem.dto.Trainer;
import org.jsp.studentmanagmentsystem.service.TrainerService;
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
public class TrainerController {

	@Autowired
	private TrainerService trainerService;
	
	@GetMapping("/findtrainerbyid/{id}")
	public Trainer findTrainerById(@PathVariable int id) {
		
		return trainerService.findTrainerById(id);
	}
	
	@PostMapping("/savetrainer")
	public Trainer saveTrainer(@RequestBody Trainer trainer) {
			
		return trainerService.saveTrainer(trainer);
	}
	
	@PutMapping("updatetrainer")
	public Trainer updateTrainer(@RequestBody Trainer trainer) {
		
		return trainerService.updateTrainer(trainer);
	}
	
	@GetMapping("/findalltrainers")
	public List<Trainer> findAllTrainers(){
		
		return trainerService.findAllTrainers();
	}
	
	@GetMapping("/logintrainer/{email}/{password}")
	public boolean trainerLogin(@PathVariable String email, @PathVariable String password) {
		
		return trainerService.trainerLogin(email,password);
	}
	
	@DeleteMapping("/deletetrainer/{id}")
	public Trainer deleteTrainerById(@PathVariable int id) {
		
		return trainerService.deleteTrainerById(id);
	}
}
