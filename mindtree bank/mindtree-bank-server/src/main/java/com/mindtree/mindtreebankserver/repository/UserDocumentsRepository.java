package com.mindtree.mindtreebankserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.mindtreebankserver.model.UserDocuments;

@Repository
public interface UserDocumentsRepository extends JpaRepository<UserDocuments, Integer>{

}
