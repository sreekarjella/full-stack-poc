package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.ResidentialStatus;

@Repository
public interface ResidentialStatusRepository extends JpaRepository<ResidentialStatus, Integer>{

}
