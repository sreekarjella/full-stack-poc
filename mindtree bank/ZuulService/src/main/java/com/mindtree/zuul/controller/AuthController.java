package com.mindtree.zuul.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.zuul.dto.AuthDetails;
import com.mindtree.zuul.dto.AuthToken;
import com.mindtree.zuul.util.JWTUtil;

@RestController
@CrossOrigin("*")
public class AuthController {

	@Autowired
	private JWTUtil jwtUtil;

	@Autowired
	private AuthenticationManager authManager;

	@RequestMapping(path = "/login", method = RequestMethod.POST)
	public AuthToken authenticate(@RequestBody AuthDetails authDetails) {
		try {
			authManager.authenticate(new UsernamePasswordAuthenticationToken(authDetails.getUserName(), authDetails.getPassword()));
		} catch (Exception e) {
			e.printStackTrace();
		}
		AuthToken token = new AuthToken();
		token.setToken(jwtUtil.generateToken(authDetails.getUserName()));
		token.setExpiresAt(jwtUtil.extractExpiration(token.getToken()));
		return token;
	}
}
