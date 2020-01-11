package com.TodoApplication.rest.webservice.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//we want spring to manage creating instances
@Service
public class HardCodedService {

    //this acts as database for now
    //it stores all the data now
    private static List<Todo> todos = new ArrayList<Todo>();
    private static long idCounter = 0;

    static{
        todos.add(new Todo(++idCounter, "Ken", "Learn React", new Date(), false));
        todos.add(new Todo(++idCounter, "Ken", "Fitness", new Date(), false));
        todos.add(new Todo(++idCounter, "Ken", "Do LeetCode questions", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    //deletes a specific task by id
    public Todo deleteById(long id){
        Todo todo = findById(id);
        if (todo == null){
            return null;
        }
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    //find a specific task by id
    public Todo findById(long id){
        for(Todo todo: todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }


    //modifies or creates new tasks for the whole list
    public Todo updateTodoTask(Todo todo){
        if(todo.getId() == 0){
            todo.setId(++idCounter);
            todos.add(todo);
        }
        else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

}
