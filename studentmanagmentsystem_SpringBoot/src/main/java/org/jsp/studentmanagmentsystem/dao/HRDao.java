package org.jsp.studentmanagmentsystem.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dto.HR;
import org.jsp.studentmanagmentsystem.repository.HRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class HRDao {

	@Autowired
	private HRRepository hrRepository;

	public Optional<HR> findHRById(int id) {
		
		return hrRepository.findById(id);
	}

	public HR saveHR(HR hr) {
	
		return hrRepository.save(hr);
	}
	
	public HR updateHR(HR hr) {
		
		return hrRepository.save(hr);
	}

	public List<HR> findAllHRs() {
		
		return hrRepository.findAll();
	}

	public HR findHRByEmail(String email) {
		
		return hrRepository.findHRByEmail(email);
	}

	public void deleteHR(HR hr) {
		
		hrRepository.delete(hr);
		
	}

	
	
}
