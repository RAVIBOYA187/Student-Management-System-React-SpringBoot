package org.jsp.studentmanagmentsystem.repository;

import java.util.Optional;

import org.jsp.studentmanagmentsystem.dto.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{

	@Query("SELECT t FROM Trainer t WHERE t.email = ?1")
	public Trainer findTrainerByEmail(String email);

}
