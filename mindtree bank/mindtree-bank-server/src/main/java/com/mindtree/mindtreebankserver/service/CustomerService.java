package com.mindtree.mindtreebankserver.service;

import java.util.List;

import com.mindtree.mindtreebankserver.model.Registration;

public interface CustomerService {
	
	String registerCustomer(Registration customer) throws Exception;

	Boolean clearTable() throws Exception;

	List<Registration> registered() throws Exception;
	
	String updateRegistration(Registration customer) throws Exception;
}
