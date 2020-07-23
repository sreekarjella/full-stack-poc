package com.mindtree.zuul.dto;

import java.util.Date;

public class AuthToken {

	private String token;
	private Date expiresAt;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Date getExpiresAt() {
		return expiresAt;
	}

	public void setExpiresAt(Date expiresAt) {
		this.expiresAt = expiresAt;
	}

	@Override
	public String toString() {
		return "AuthToken [token=" + token + ", expiresAt=" + expiresAt + "]";
	}

}
