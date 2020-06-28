package com.ks.app.todo.controller;

import com.fasterxml.jackson.annotation.JsonPropertyDescription;
import com.ks.app.todo.entity.Todo;
import com.ks.app.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    private final TodoService todoService;

    @Autowired
    private TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/users/{username}/todos")
    public ResponseEntity<List<Todo>> getAllTodo(@PathVariable String username) {
        return new ResponseEntity<List<Todo>>(todoService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> getTodo(@PathVariable String username, @PathVariable long id) {
        return new ResponseEntity<Todo>(todoService.findById(id), HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Todo> createTodo(@PathVariable String username, @RequestBody Todo todo){
        Todo createTodo = todoService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(createTodo.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
        Todo updatedTodo = todoService.save(todo);
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }


    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id);
        if (todo == null) return ResponseEntity.notFound().build();
        return ResponseEntity.noContent().build();
    }
}
