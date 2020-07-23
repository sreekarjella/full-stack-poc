package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.RegistrationStatus;

@Repository
public interface RegistrationStatusRepository extends JpaRepository<RegistrationStatus, Integer>{

}
