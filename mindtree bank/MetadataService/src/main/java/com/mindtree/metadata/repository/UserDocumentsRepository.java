package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.UserDocuments;


@Repository
public interface UserDocumentsRepository extends JpaRepository<UserDocuments, Integer>{

}
