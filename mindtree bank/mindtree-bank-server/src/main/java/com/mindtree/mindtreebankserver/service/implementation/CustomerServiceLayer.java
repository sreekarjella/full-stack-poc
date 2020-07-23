package com.mindtree.mindtreebankserver.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.mindtreebankserver.model.Registration;
import com.mindtree.mindtreebankserver.repository.RegistrationRepository;
import com.mindtree.mindtreebankserver.repository.UserDetailsRepository;
import com.mindtree.mindtreebankserver.service.CustomerService;

@Service
public class CustomerServiceLayer implements CustomerService {

	@Autowired
	private RegistrationRepository registrationRepository;
	
	@Autowired
	private UserDetailsRepository userDetailsRepository;

	@Override
	public String registerCustomer(Registration customer) throws Exception {
		userDetailsRepository.save(customer.getUserDetails());
		registrationRepository.save(customer);
		return "Your registration is successful. You will hear from us shortly";
	}

	@Override
	public Boolean clearTable() throws Exception {
		userDetailsRepository.deleteAll();
		registrationRepository.deleteAll();
		return true;
	}

	@Override
	public List<Registration> registered() throws Exception {
		return registrationRepository.findAll();
	}

}
