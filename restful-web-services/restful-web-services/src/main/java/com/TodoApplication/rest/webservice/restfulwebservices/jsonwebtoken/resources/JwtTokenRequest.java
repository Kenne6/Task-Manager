package com.TodoApplication.rest.webservice.restfulwebservices.jsonwebtoken.resources;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    /*{
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLZW4iLCJleHAiOjE1NzkxNDcxMDUsImlhdCI6MTU3ODU0MjMwNX0.OrrakTxrWP2Os5g1yFboBTXW6dAljZWGuxIZc4MetaOh7yHad9CsF-ghDAr3pTSN9lyOGKERzeChJA4kVSwf3g"
    }*/
    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
