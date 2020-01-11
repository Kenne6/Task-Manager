package com.TodoApplication.rest.webservice.restfulwebservices.todo;


//This is the controller for Todo app
//It manages all the REST requests from the front end

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

//this is the controller for JPA repository
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JPAResourcesController {

    //allows spring to manage creating instances
    //@Autowired
    //hardcoded service
    //private HardCodedService todoService;

    @Autowired
    private JPARepository JPARepo;
    //maps to specific url
    //get all the todo tasks
    @GetMapping(path="/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return JPARepo.findByUsername(username);
        //return todoService.findAll();       --hardcodedservice
    }

    //deletes a todo task based on id
    @DeleteMapping(path="/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTask(
            @PathVariable String username, @PathVariable long id){
        //Todo todo = todoService.deleteById(id);       --hardcodedservice
        JPARepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    //get the specific task based on id
    @GetMapping(path="/jpa/users/{username}/todos/modifydata/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return JPARepo.findById(id).get();
        //return todoService.findById(id);          --hardcodedservice
    }


    //modify the specific task based on id
    @PutMapping(path="/jpa/users/{username}/todos/modifydata/{id}")
    public ResponseEntity<Todo> modifyTodoTask(
            @PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        //Todo updatedTodo = todoService.updateTodoTask(todo);    --hardcodedservice
        todo.setUsername(username);
        Todo updatedTodo = JPARepo.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path="/jpa/users/{username}/todos")
    public ResponseEntity<Void> addNewTask(@PathVariable String username, @RequestBody Todo todo){
        //Todo addedTodo = todoService.updateTodoTask(todo);      --hardcodedservice
        todo.setUsername(username);
        Todo addedTodo = JPARepo.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/modifydata/{id}").buildAndExpand(addedTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
