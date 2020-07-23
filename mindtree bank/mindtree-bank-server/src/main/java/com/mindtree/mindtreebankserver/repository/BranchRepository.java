package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.Branch;

@Repository
public interface BranchRepository extends JpaRepository<Branch, Integer> {

}
