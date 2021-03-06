package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.UserDetails;


@Repository
public interface UserDetailsRepository extends JpaRepository<UserDetails, Integer>{

}
