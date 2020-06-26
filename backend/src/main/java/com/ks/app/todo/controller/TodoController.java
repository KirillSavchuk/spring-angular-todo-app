package com.ks.app.todo.controller;

import com.ks.app.todo.entity.Todo;
import com.ks.app.todo.service.TodoService;
import com.sun.tracing.dtrace.ProviderAttributes;
import jdk.nashorn.internal.objects.annotations.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deleteById(id);

        if (todo == null) return ResponseEntity.notFound().build();

        return ResponseEntity.noContent().build();
    }
}
