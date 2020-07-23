package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.AccountType;

@Repository
public interface AccountTypeRepository extends JpaRepository<AccountType, Integer>{

}
