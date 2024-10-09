package com.gl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.gl.model.User;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class UserController {

	private final RestTemplate restTemplate;

	@Autowired
	public UserController(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		String url = "https://jsonplaceholder.typicode.com/users";
		User[] users = restTemplate.getForObject(url, User[].class);
		return List.of(users);
	}

}
