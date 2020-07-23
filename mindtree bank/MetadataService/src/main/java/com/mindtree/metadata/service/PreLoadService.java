package com.mindtree.metadata.service;

import java.util.List;

import com.mindtree.metadata.model.AccountType;
import com.mindtree.metadata.model.Branch;
import com.mindtree.metadata.model.Document;
import com.mindtree.metadata.model.Education;
import com.mindtree.metadata.model.Gender;
import com.mindtree.metadata.model.Income;
import com.mindtree.metadata.model.MaritalStatus;
import com.mindtree.metadata.model.Occupation;
import com.mindtree.metadata.model.RegistrationStatus;
import com.mindtree.metadata.model.ResidentialStatus;
import com.mindtree.metadata.model.UserDocuments;
import com.mindtree.metadata.model.UserType;

public interface PreLoadService {

	List<Branch> getBranches() throws Exception;

	List<AccountType> getAccountTypes() throws Exception;

	List<Document> getDocuments() throws Exception;

	List<Education> getEducation() throws Exception;

	List<Gender> getGenders() throws Exception;

	List<Income> getIncomes() throws Exception;

	List<MaritalStatus> getMaritalStatus() throws Exception;

	List<Occupation> getOccupations() throws Exception;

	List<RegistrationStatus> getRegistrationStatus() throws Exception;

	List<ResidentialStatus> getResidentialStatus() throws Exception;

	List<UserType> getUserTypes() throws Exception;

	List<UserDocuments> getUserDocuments() throws Exception;

}
