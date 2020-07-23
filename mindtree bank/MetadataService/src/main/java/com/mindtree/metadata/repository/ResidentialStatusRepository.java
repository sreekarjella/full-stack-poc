package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.ResidentialStatus;


@Repository
public interface ResidentialStatusRepository extends JpaRepository<ResidentialStatus, Integer>{

}
