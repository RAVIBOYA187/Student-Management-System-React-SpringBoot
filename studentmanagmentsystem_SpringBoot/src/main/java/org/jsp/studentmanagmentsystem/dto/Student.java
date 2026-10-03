package org.jsp.studentmanagmentsystem.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
//@Table(name="mallesh")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String studentName;
	private String email;
	private String password;
	private long mobile; 
	private String gender;
	
	@JsonIgnoreProperties("students")
	@ManyToMany(cascade = CascadeType.ALL)
	private List<Batch> batches;
			
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	public long getMobile() {
		return mobile;
	}
	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	
	public List<Batch> getBatches() {
		return batches;
	}
	
	public void setBatches(List<Batch> batches) {
		this.batches = batches;
	}
	
	
	public void addBatch(Batch batch) {
		if(batches==null) {
			batches = new ArrayList<Batch>();
		}
		batches.add(batch);
//		batch.addStudent(this);
	}
}
