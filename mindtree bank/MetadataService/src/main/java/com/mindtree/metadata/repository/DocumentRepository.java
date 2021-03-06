package com.mindtree.metadata.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.metadata.model.Document;


@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer>{

}
