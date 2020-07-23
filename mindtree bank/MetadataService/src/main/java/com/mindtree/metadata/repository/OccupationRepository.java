package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Occupation;


@Repository
public interface OccupationRepository extends JpaRepository<Occupation, Integer> {

}
