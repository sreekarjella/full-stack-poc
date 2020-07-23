package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.UserType;


@Repository
public interface UserTypeRepository extends JpaRepository<UserType, Integer>{

}
