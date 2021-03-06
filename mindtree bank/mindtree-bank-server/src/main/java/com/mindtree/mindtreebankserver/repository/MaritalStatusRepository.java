package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.MaritalStatus;

@Repository
public interface MaritalStatusRepository extends JpaRepository<MaritalStatus, Integer>{

}
