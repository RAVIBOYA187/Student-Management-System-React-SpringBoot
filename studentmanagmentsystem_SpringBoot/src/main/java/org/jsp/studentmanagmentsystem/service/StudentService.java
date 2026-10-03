package org.jsp.studentmanagmentsystem.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dao.BatchDao;
import org.jsp.studentmanagmentsystem.dao.StudentDao;
import org.jsp.studentmanagmentsystem.dto.Batch;
import org.jsp.studentmanagmentsystem.dto.Student;
import org.jsp.studentmanagmentsystem.exceptions.StudentAlreadyExistException;
import org.jsp.studentmanagmentsystem.exceptions.StudentNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private BatchService batchService;
	
	@Autowired
	private BatchDao batchDao;
	
	public Student findStudentById(int id) {
		Optional<Student> os = studentDao.findStudentById(id);
		
		if(os.isPresent()) {
			return os.get();
		}
		throw new StudentNotFoundException("there is no student with id "+ id);
	}
	
	public Student saveStudent(Student student) {
		
		Optional<Student> os = studentDao.findStudentById(student.getId());
		
		if(os.isPresent()) {
			throw new StudentAlreadyExistException("Student already exist with id : "+ student.getId());
		}
		
		return studentDao.saveStudent(student);
	}

	public Student updateStudent(Student student) {

		Optional<Student> os = studentDao.findStudentById(student.getId());
		
		if( os.isPresent()) {
			return studentDao.updateStudent(student);
		}
		throw new StudentNotFoundException("for updating student not exist with id : "+student.getId());
	}

	public List<Student> findAllStudents() {
		
		return studentDao.findAllStudents();
	}

	public boolean studentLogin(String email, String password) {
			
		Student s = studentDao.findStudentByEmail(email);
		
		if(s != null ) {
			if(s.getPassword().equals(password)) {
				return true;
			}
			throw new StudentNotFoundException("wrong password machaa..");
		}
		throw new StudentNotFoundException("wrong email machaa..");
	}
	
	
	public Student deleteStudentById(int id) {

	    Student student = studentDao.findStudentById(id)
	            .orElseThrow(() ->
	                    new StudentNotFoundException(
	                            "Student not found with id : " + id));

	    List<Batch> batches = new ArrayList<Batch>(student.getBatches());
	    System.out.println("Student batches: " + student.getBatches().size());

	    for(Batch batch : batches) {

	        batch.getStudents().remove(student);

	        student.getBatches().remove(batch);
	        
	        System.out.println("Removing from batch: " + batch.getId());

	        batchDao.saveBatch(batch);
	    }

	    studentDao.deleteStudent(student);
	    System.out.println("Completed");

	    return student;
	}
}
