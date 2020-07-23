package com.mindtree.documentupload.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*")
public class DocumentController {

	@RequestMapping(path = "/upload-documents", method = RequestMethod.POST)
	public ResponseEntity<?> uploadKYCData(@RequestParam("kyc") List<MultipartFile> fileList) {
		String OUT_PATH = "D:\\Test101\\";

		try {
			for (MultipartFile file : fileList) {
				byte[] bytes = file.getBytes();
				Path path = Paths.get(OUT_PATH + file.getOriginalFilename());
				Files.write(path, bytes);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<String>("Unable to save images",HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<String>("Successfully saved images", HttpStatus.OK);
	}
}
