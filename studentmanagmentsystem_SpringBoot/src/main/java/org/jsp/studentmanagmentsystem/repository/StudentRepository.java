package org.jsp.studentmanagmentsystem.repository;

import org.jsp.studentmanagmentsystem.dao.StudentDao;
import org.jsp.studentmanagmentsystem.dto.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

	
	@Query("SELECT s FROM Student s WHERE s.email = ?1")
	public Student findStudentByEmail(String email);

	
	
}
