package com.mindtree.documentvalidation.service.implementation;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.mindtree.documentvalidation.model.Registration;
import com.mindtree.documentvalidation.service.EmailService;


@Service
public class EmailServiceLayer implements EmailService {
	
	@Autowired
    private JavaMailSender emailSender;

	@Override
	public void sendEmail(Registration customer) throws AddressException, MessagingException {
		SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("sreekarjella@gmail.com");
        message.setTo("sreekarjella1@gmail.com"); 
        message.setSubject("Please upload ID proofs"); 
        message.setText("http://localhost:8100/#/customer/upload;id=" + customer.getId());
        emailSender.send(message);
	}

	@Override
	public void accountCreated(Registration customer) {
		SimpleMailMessage message = new SimpleMailMessage(); 
        message.setFrom("sreekarjella@gmail.com");
        message.setTo("sreekarjella1@gmail.com"); 
        message.setSubject("Account Created"); 
        message.setText("Dear "+customer.getUserDetails().getFirstName()+". Greetings from Mindtree Bank. Account created successfully");
        emailSender.send(message);
	}

}
