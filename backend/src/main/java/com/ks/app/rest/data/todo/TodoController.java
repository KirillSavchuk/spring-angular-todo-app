package com.ks.app.rest.data.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(path = "/jpa")
public class TodoController {
	
	private final TodoRepository todoRepository;

	@Autowired
	public TodoController(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoRepository.findByUsername(username);
	}

	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id){
		return todoRepository.findById(id).orElse(new Todo());
	}

	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		todoRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
		Todo todoUpdated = todoRepository.save(todo);
		return new ResponseEntity<>(todoUpdated, HttpStatus.OK);
	}
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
		todo.setUsername(username);
		Todo createdTodo = todoRepository.save(todo);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(createdTodo.getId())
				.toUri();
		
		return ResponseEntity.created(uri).build();
	}
		
}