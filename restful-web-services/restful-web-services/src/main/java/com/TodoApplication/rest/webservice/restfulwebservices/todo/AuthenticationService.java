package com.TodoApplication.rest.webservice.restfulwebservices.todo;

public class AuthenticationService {
    private String message;
    public AuthenticationService(String message){
        this.message = message;
    }
    public void setMessage(String message){
        this.message = message;
    }
    public String getMessage(){
        return this.message;
    }

    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }
}
