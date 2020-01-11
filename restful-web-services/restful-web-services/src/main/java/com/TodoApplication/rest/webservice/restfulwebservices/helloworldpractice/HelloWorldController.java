package com.TodoApplication.rest.webservice.restfulwebservices.helloworldpractice;

import org.springframework.web.bind.annotation.*;

//Controller
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

    @GetMapping(path="/hello-world")
    public String HelloWorld(){
        return("hello world");
    }

    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean HelloWorldBean(){ return new HelloWorldBean("Hello World Bean");}

    @GetMapping(path="/hello-world/path/{name}")
    public HelloWorldBean HelloWorldPath(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello, %s", name));
    }
}
