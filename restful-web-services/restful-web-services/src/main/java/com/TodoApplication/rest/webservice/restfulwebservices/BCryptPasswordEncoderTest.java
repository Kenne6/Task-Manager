package com.TodoApplication.rest.webservice.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//generating encoded password string
public class BCryptPasswordEncoderTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        int i = 0;
        while(i<5){
            String encodedString = encoder.encode("kenzuishuai");
            System.out.println(encodedString);
            i++;
        }
    }
}
