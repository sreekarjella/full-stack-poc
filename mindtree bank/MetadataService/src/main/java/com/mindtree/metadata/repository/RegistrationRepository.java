package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Registration;


@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer>{

}
