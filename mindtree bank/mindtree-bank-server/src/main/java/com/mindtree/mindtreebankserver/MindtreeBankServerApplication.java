package com.mindtree.mindtreebankserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MindtreeBankServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MindtreeBankServerApplication.class, args);
	}

}
