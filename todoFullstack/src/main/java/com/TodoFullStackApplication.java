package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class TodoFullStackApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoFullStackApplication.class, args);
	}

	@GetMapping
	public String getmap(){
		return "new task";
	}
}
