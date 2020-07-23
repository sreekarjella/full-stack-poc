package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.Gender;

@Repository
public interface GenderRepository extends JpaRepository<Gender, Integer>{

}
