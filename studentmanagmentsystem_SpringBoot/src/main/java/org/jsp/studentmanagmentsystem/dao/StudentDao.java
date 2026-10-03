package org.jsp.studentmanagmentsystem.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dto.Student;
import org.jsp.studentmanagmentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class StudentDao {

	@Autowired
	private StudentRepository studentRepository;
	
	public Optional<Student> findStudentById(int id){
		
		return studentRepository.findById(id);
	}
	
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	public Student updateStudent(Student student) {
		
		return studentRepository.save(student);
	}
	
	public List<Student> findAllStudents() {
		
		return studentRepository.findAll();
	}

	public Student findStudentByEmail(String email) {

		return studentRepository.findStudentByEmail(email);
	}

	public void deleteStudent(Student s) {
		
		studentRepository.delete(s);
	}
}
