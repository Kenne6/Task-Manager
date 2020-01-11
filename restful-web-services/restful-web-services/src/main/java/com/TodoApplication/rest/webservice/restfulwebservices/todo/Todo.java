package com.TodoApplication.rest.webservice.restfulwebservices.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

//Here is the object constructor for todo task objects
//It has all the properties of a todo task

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String username = "";
    private String description = "";
    private Date targetCompletionDate = null;
    private boolean hasCompleted = false;

    //needs no arguments constructor for request body
    //it then calls specific setters
    protected Todo(){

    }

    public Todo(Long id, String username, String description, Date targetCompletionDate, boolean hasCompleted){
        super();
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetCompletionDate = targetCompletionDate;
        this.hasCompleted = hasCompleted;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getDescription() {
        return description;
    }

    public Date getTargetCompletionDate() {
        return targetCompletionDate;
    }

    public boolean getHasCompleted() {
        return hasCompleted;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTargetCompletionDate(Date targetCompletionDate) {
        this.targetCompletionDate = targetCompletionDate;
    }

    public void setHasCompleted(boolean hasCompleted) {
        this.hasCompleted= hasCompleted;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
