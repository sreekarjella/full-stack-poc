package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Branch;


@Repository
public interface BranchRepository extends JpaRepository<Branch, Integer> {

}
