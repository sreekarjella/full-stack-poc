package com.mindtree.mindtreebankserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.mindtreebankserver.model.UserDocuments;
import com.mindtree.mindtreebankserver.service.KYCService;

@RestController
@CrossOrigin(origins = "*")
public class KYCController {
	
	@Autowired
	private KYCService kycService;
	
	@RequestMapping(path = "upload-kyc-details", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> saveKYCDetais(@RequestBody List<UserDocuments> kycData) {
		System.out.println(kycData);
		try {
			kycService.saveKycDetails(kycData);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("Error in saving KYC details", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Successfully saved KYC details", HttpStatus.OK);
	}

}
