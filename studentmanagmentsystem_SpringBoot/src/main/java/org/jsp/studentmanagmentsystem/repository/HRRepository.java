package org.jsp.studentmanagmentsystem.repository;

import org.jsp.studentmanagmentsystem.dto.HR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface HRRepository extends JpaRepository<HR, Integer> {

	@Query("SELECT h FROM HR h WHERE h.email = ?1")
	public HR findHRByEmail(String email);

	
}
