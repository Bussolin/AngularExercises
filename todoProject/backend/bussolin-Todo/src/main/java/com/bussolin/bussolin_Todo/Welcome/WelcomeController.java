package com.bussolin.bussolin_Todo.Welcome;

import java.rmi.UnexpectedException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@CrossOrigin("http://localhost:4200")
public class WelcomeController {
	
	@GetMapping(path="/welcome")
	public WelcomeBean WelcomeBean() throws UnexpectedException {
		return new WelcomeBean("JAVA SPRING BOOT!");
	}
}
