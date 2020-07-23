package com.mindtree.metadata.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
import com.mindtree.metadata.repository.AccountTypeRepository;
import com.mindtree.metadata.repository.BranchRepository;
import com.mindtree.metadata.repository.DocumentRepository;
import com.mindtree.metadata.repository.EducationRepository;
import com.mindtree.metadata.repository.GenderRepository;
import com.mindtree.metadata.repository.IncomeRepository;
import com.mindtree.metadata.repository.MaritalStatusRepository;
import com.mindtree.metadata.repository.OccupationRepository;
import com.mindtree.metadata.repository.RegistrationStatusRepository;
import com.mindtree.metadata.repository.ResidentialStatusRepository;
import com.mindtree.metadata.repository.UserDocumentsRepository;
import com.mindtree.metadata.repository.UserTypeRepository;
import com.mindtree.metadata.service.PreLoadService;


@Service
public class PreLoadServiceLayer implements PreLoadService {

	@Autowired
	private BranchRepository branchRepo;

	@Autowired
	private AccountTypeRepository accountTypesRepo;

	@Autowired
	private DocumentRepository documentRepo;
	
	@Autowired
	private EducationRepository educationRepo; 
	
	@Autowired
	private GenderRepository genderRepo;
	
	@Autowired
	private IncomeRepository incomeRepo;
	
	@Autowired
	private MaritalStatusRepository maritalStatusRepo;
	
	@Autowired
	private OccupationRepository occupationRepo;
	
	@Autowired
	private RegistrationStatusRepository regsitrationStatusRepo;
	
	@Autowired
	private ResidentialStatusRepository residentialStatusRepo;
	
	@Autowired
	private UserTypeRepository userTypeRepo;
	
	@Autowired
	private UserDocumentsRepository userDocumentRepo;

	@Override
	public List<Branch> getBranches() throws Exception {
		return branchRepo.findAll();
	}

	@Override
	public List<AccountType> getAccountTypes() throws Exception {
		return accountTypesRepo.findAll();
	}

	@Override
	public List<Document> getDocuments() throws Exception {
		return documentRepo.findAll();
	}

	@Override
	public List<Education> getEducation() throws Exception {
		return educationRepo.findAll();
	}

	@Override
	public List<Gender> getGenders() throws Exception {
		return genderRepo.findAll();
	}

	@Override
	public List<Income> getIncomes() throws Exception {
		return incomeRepo.findAll();
	}

	@Override
	public List<MaritalStatus> getMaritalStatus() throws Exception {
		return maritalStatusRepo.findAll();
	}

	@Override
	public List<Occupation> getOccupations() throws Exception {
		return occupationRepo.findAll();
	}

	@Override
	public List<RegistrationStatus> getRegistrationStatus() throws Exception {
		return regsitrationStatusRepo.findAll();
	}

	@Override
	public List<ResidentialStatus> getResidentialStatus() throws Exception {
		return residentialStatusRepo.findAll();
	}

	@Override
	public List<UserType> getUserTypes() throws Exception {
		return userTypeRepo.findAll();
	}

	@Override
	public List<UserDocuments> getUserDocuments() throws Exception {
		return userDocumentRepo.findAll();
	}

}
