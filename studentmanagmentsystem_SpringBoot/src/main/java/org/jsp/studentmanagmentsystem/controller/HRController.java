package org.jsp.studentmanagmentsystem.controller;

import java.util.List;

import org.jsp.studentmanagmentsystem.dto.HR;
import org.jsp.studentmanagmentsystem.dto.Student;
import org.jsp.studentmanagmentsystem.service.HRService;
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
public class HRController {

	@Autowired
	private HRService hrService;
	
	@GetMapping("/findhrbyid/{id}")
	public HR findHRById(@PathVariable int id) {
		
		return hrService.findHRById(id);
	}
	
	@PostMapping("/savehr")
	public HR saveHR(@RequestBody HR hr) {
			
		return hrService.saveHR(hr);
	}
	
	@PutMapping("updatehr")
	public HR updateHR(@RequestBody HR hr) {
		
		return hrService.updateHR(hr);
	}
	
	@GetMapping("/findallhrs")
	public List<HR> findAllHRs(){
		
		return hrService.findAllHRs();
	}
	
	@GetMapping("/loginhr/{email}/{password}")
	public boolean hrLogin(@PathVariable String email, @PathVariable String password) {
		
		return hrService.hrLogin(email,password);
	}
	
	@DeleteMapping("/deletehr/{id}")
	public HR deleteHRById(@PathVariable int id) {
		return hrService.deleteHRById(id);
	}
	
	
}
