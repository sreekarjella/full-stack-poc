package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Income;


@Repository
public interface IncomeRepository extends JpaRepository<Income, Integer>{

}
