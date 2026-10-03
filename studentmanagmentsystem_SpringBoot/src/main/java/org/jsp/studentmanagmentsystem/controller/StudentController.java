package org.jsp.studentmanagmentsystem.controller;

import java.util.List;

import org.jsp.studentmanagmentsystem.dto.Student;
import org.jsp.studentmanagmentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

	@Autowired
	private StudentService studentService;

	
	@GetMapping("/example")
	public String hii() {
		return "hii hloo namasthe,,,....";
	}
	
	@GetMapping("/findstudentbyid/{id}")
	public Student findStudentById(@PathVariable int id) {
		
//		System.out.println(service.findStudentById(id));
		
		return studentService.findStudentById(id);
	}
	
	@PostMapping("/savestudent")
	public Student saveStudent(@RequestBody Student student) {
			System.out.println("=========================================================================================");
			System.out.println(student);
			System.out.println("=========================================================================================");
			
		return studentService.saveStudent(student);
	}
	
	@PutMapping("/updatestudent")
	public Student updateStudent(@RequestBody Student student) {
		
		return studentService.updateStudent(student);
	}
	
	@GetMapping("/findallstudents")
	public List<Student> findAllStudents(){
		
		return studentService.findAllStudents();
	}
	
	@GetMapping("/loginstudent/{email}/{password}")
	public boolean studentLogin(@PathVariable String email, @PathVariable String password) {
		
		return studentService.studentLogin(email,password);
	}
	
	@DeleteMapping("/deletestudent/{id}")
	public Student deleteStudentById(@PathVariable int id) {
		return studentService.deleteStudentById(id);
	}
}
