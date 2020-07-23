package com.mindtree.mindtreebankserver.service.implementation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mindtree.mindtreebankserver.model.UserDocuments;
import com.mindtree.mindtreebankserver.repository.UserDocumentsRepository;
import com.mindtree.mindtreebankserver.service.KYCService;

@Service
public class KYCServiceLayer implements KYCService {

	@Autowired
	private UserDocumentsRepository userDocumentsRepository;

	@Override
	public void saveKycDetails(List<UserDocuments> kycData) throws Exception {
		kycData.forEach(userDoc -> {
			userDocumentsRepository.save(userDoc);
		});
	}

}
