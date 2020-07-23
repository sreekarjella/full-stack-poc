package com.mindtree.documentvalidation.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.documentvalidation.model.Registration;
import com.mindtree.documentvalidation.service.EmailService;


@RestController
@CrossOrigin(origins = "*")
public class EmailController {
	
	@Autowired
	private EmailService emailService;
	
	@RequestMapping(value = "/send-registration-email", method = RequestMethod.POST)
	public ResponseEntity<?> sendEmail(@RequestBody Registration customer) {
		try {
			emailService.sendEmail(customer);
		} catch (Exception e) {
			return new ResponseEntity<String>("Error in sending email", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Email sent successfully", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/account-created", method = RequestMethod.POST)
	public ResponseEntity<?> sendAccountCreatedEmail(@RequestBody Registration customer) {
		try {
			emailService.accountCreated(customer);
		} catch (Exception e) {
			return new ResponseEntity<String>("Error in sending email", HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Email sent successfully", HttpStatus.OK);
	}

}
