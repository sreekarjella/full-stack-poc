package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Education;


@Repository
public interface EducationRepository extends JpaRepository<Education, Integer>{

}
