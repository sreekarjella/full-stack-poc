package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Gender;


@Repository
public interface GenderRepository extends JpaRepository<Gender, Integer>{

}
