package com.mindtree.metadata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
import com.mindtree.metadata.service.PreLoadService;


@RestController
@CrossOrigin(origins = "*")
public class PreLoadController {
	
	@Autowired
	private PreLoadService preLoadService;
	
	@RequestMapping(path="/branches", method = RequestMethod.GET)
	public ResponseEntity<?> loadBranches() {
		try {
			return new ResponseEntity<List<Branch>>(preLoadService.getBranches(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/account-types", method = RequestMethod.GET)
	public ResponseEntity<?> loadAccountTypes() {
		try {
			return new ResponseEntity<List<AccountType>>(preLoadService.getAccountTypes(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/documents", method = RequestMethod.GET)
	public ResponseEntity<?> loadDocuments() {
		try {
			return new ResponseEntity<List<Document>>(preLoadService.getDocuments(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/educations", method = RequestMethod.GET)
	public ResponseEntity<?> loadEducation() {
		try {
			return new ResponseEntity<List<Education>>(preLoadService.getEducation(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/genders", method = RequestMethod.GET)
	public ResponseEntity<?> loadGenders() {
		try {
			return new ResponseEntity<List<Gender>>(preLoadService.getGenders(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/incomes", method = RequestMethod.GET)
	public ResponseEntity<?> loadIncomes() {
		try {
			return new ResponseEntity<List<Income>>(preLoadService.getIncomes(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/marital-status", method = RequestMethod.GET)
	public ResponseEntity<?> loadMaritalStatus() {
		try {
			return new ResponseEntity<List<MaritalStatus>>(preLoadService.getMaritalStatus(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/occupation", method = RequestMethod.GET)
	public ResponseEntity<?> loadOccupation() {
		try {
			return new ResponseEntity<List<Occupation>>(preLoadService.getOccupations(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/registration-status", method = RequestMethod.GET)
	public ResponseEntity<?> loadRegistrationStatus() {
		try {
			return new ResponseEntity<List<RegistrationStatus>>(preLoadService.getRegistrationStatus(), HttpStatus.OK);
		} catch (Exception e) { 
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/residential-status", method = RequestMethod.GET)
	public ResponseEntity<?> loadResidentialStatus() {
		try {
			return new ResponseEntity<List<ResidentialStatus>>(preLoadService.getResidentialStatus(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/user-type", method = RequestMethod.GET)
	public ResponseEntity<?> loadUserType() {
		try {
			return new ResponseEntity<List<UserType>>(preLoadService.getUserTypes(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(path="/user-documents", method = RequestMethod.GET)
	public ResponseEntity<?> loadUserDocuments() {
		try {
			return new ResponseEntity<List<UserDocuments>>(preLoadService.getUserDocuments(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

}
