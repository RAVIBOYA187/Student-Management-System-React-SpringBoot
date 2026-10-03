package org.jsp.studentmanagmentsystem.service;

import java.util.List;
import java.util.Optional;

import org.jsp.studentmanagmentsystem.dao.HRDao;
import org.jsp.studentmanagmentsystem.dto.HR;
import org.jsp.studentmanagmentsystem.dto.Student;
import org.jsp.studentmanagmentsystem.exceptions.HRAlreadyExistException;
import org.jsp.studentmanagmentsystem.exceptions.HRNotFoundException;
import org.jsp.studentmanagmentsystem.exceptions.StudentAlreadyExistException;
import org.jsp.studentmanagmentsystem.exceptions.StudentNotFoundException;
import org.jsp.studentmanagmentsystem.repository.HRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HRService {

	@Autowired
	private HRDao hrDao;

	public HR findHRById(int id) {
		
		Optional<org.jsp.studentmanagmentsystem.dto.HR> ohr = hrDao.findHRById(id);
		if(ohr.isPresent()) {
			return ohr.get();
		}
		throw new HRNotFoundException("there is no HR with id "+ id);
 
	}

	public HR saveHR(HR hr) {
		
		Optional<HR> ohr = hrDao.findHRById(hr.getHrId());
		
		if(ohr.isPresent()) {
			throw new HRAlreadyExistException("HR already exist with id : "+ hr.getHrId());
		}
		return hrDao.saveHR(hr);
	}
	
	public HR updateHR(HR hr) {
		
		Optional<HR> ohr = hrDao.findHRById(hr.getHrId());
		
		if(ohr.isPresent()) {
			
			return hrDao.updateHR(hr);
		}
		throw new StudentNotFoundException("for updating student not exist with id : "+hr.getHrId());
	}

	public List<HR> findAllHRs() {
		return hrDao.findAllHRs();
	}

	public boolean hrLogin(String email, String password) {
		
		HR hr = hrDao.findHRByEmail(email);
		
		if(hr != null ) {
			if(hr.getPassword().equals(password)) {
				return true;
			}
			throw new HRNotFoundException("wrong password machaa..");
		}
		throw new HRNotFoundException("wrong email machaa..");
	}

	public HR deleteHRById(int id) {
		
		Optional<HR> ohr = hrDao.findHRById(id);
		
		if( ohr.isPresent()) {
			
			HR hr = ohr.get();
			
			hrDao.deleteHR(hr);
			
			return hr;
		}
		throw new HRNotFoundException("for deleting hr not exist with id : "+id);
	}

	
	
}
