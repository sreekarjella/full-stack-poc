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

import com.mindtree.mindtreebankserver.model.Registration;
import com.mindtree.mindtreebankserver.service.CustomerService;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@RequestMapping(path = "/clear", method = RequestMethod.GET)
	public ResponseEntity<?> clearCustomerTable() {
		try {
			return new ResponseEntity<Boolean>(customerService.clearTable(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(path = "/registered", method = RequestMethod.GET)
	public ResponseEntity<?> registeredCustomers() {
		try {
			return new ResponseEntity<List<Registration>>(customerService.registered(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("Error occured while clearing data registration table",
					HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(path = "/customer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> registerCustomer(@RequestBody Registration customer) {
		try {
			return new ResponseEntity<String>(customerService.registerCustomer(customer), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("Error occured while customer registration", HttpStatus.BAD_REQUEST);
		}
	}

	@RequestMapping(path = "/update-request", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> updateRequest(@RequestBody Registration customer) {
		try {
			customerService.updateRegistration(customer);
			return new ResponseEntity<String>("Successfully updated the request", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Error occured while updating the request", HttpStatus.BAD_REQUEST);
		}
	}
}
