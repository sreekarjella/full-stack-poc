package com.mindtree.mindtreebankserver.service;

import java.util.List;

import com.mindtree.mindtreebankserver.model.UserDocuments;

public interface KYCService {

	void saveKycDetails(List<UserDocuments> kycData) throws Exception;

}
