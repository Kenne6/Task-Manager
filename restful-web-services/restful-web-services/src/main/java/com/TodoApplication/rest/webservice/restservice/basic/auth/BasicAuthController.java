package com.TodoApplication.rest.webservice.restservice.basic.auth;

import com.TodoApplication.rest.webservice.restfulwebservices.todo.AuthenticationService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BasicAuthController {

    @GetMapping(path="/basic-auth")
    public AuthenticationService HelloWorldBean(){ return new AuthenticationService("Authentication complete");}
}
