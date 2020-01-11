package com.TodoApplication.rest.webservice.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

//This is the controller for Todo app
//It manages all the REST requests from the front end

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResourcesController {

    //allows spring to mange creating instances
    @Autowired
    private HardCodedService todoService;

    //maps to specific url
    //get all the todo tasks
    @GetMapping(path="/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoService.findAll();
    }

    //deletes a todo task based on id
    @DeleteMapping(path="/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTask(
            @PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if(todo != null){
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }

    //get the specific task based on id
    @GetMapping(path="/users/{username}/todos/modifydata/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoService.findById(id);
    }


    //modify the specific task based on id
    @PutMapping(path="/users/{username}/todos/modifydata/{id}")
    public ResponseEntity<Todo> modifyTodoTask(
            @PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        Todo updatedTodo = todoService.updateTodoTask(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping(path="/users/{username}/todos")
    public ResponseEntity<Void> addNewTask(@PathVariable String username, @RequestBody Todo todo){
        Todo addedTodo = todoService.updateTodoTask(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/modifydata/{id}").buildAndExpand(addedTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
