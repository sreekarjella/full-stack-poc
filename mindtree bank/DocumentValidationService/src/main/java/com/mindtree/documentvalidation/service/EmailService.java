package com.mindtree.documentvalidation.service;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import com.mindtree.documentvalidation.model.Registration;


public interface EmailService {

	void sendEmail(Registration customer) throws AddressException, MessagingException;

	void accountCreated(Registration customer);

}
