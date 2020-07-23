package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.AccountType;


@Repository
public interface AccountTypeRepository extends JpaRepository<AccountType, Integer>{

}
