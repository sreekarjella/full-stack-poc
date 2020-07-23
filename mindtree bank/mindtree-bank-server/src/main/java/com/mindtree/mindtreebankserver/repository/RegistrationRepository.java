package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Integer>{

}
