package com.TodoApplication.rest.webservice.restfulwebservices.jsonwebtoken.resources;

public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
