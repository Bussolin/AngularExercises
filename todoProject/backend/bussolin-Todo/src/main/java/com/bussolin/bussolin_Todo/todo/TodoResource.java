package com.bussolin.bussolin_Todo.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class TodoResource {
	
	@Autowired
	private TodoService service;
	
	@GetMapping(path = "/users/{username}/todos")
	public List<Todo> getAllTodo(@PathVariable String username ){
		return service.findAll();
	}
	
	@GetMapping(path = "/users/{username}/todos/{id}")
	public Todo getTodoById(@PathVariable String username, @PathVariable long id ){
		return service.findById( id );
	}
	
	@DeleteMapping(path = "/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable String username, 
					  	   @PathVariable long id ){
		if( service.deleteById( id ) != null ) {
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}
	
	@PutMapping( path = "/users/{username}/todos/{id}" )
	public ResponseEntity<Todo> updateTodo(
			@PathVariable String username, @PathVariable Long id, @RequestBody Todo todo){
		todo.setId(id);
		service.save(todo);
		return ResponseEntity.ok().body( service.save(todo) );
	}
	
	@PostMapping( path = "/users/{username}/todos/{id}" )
	public ResponseEntity<Todo> createTodo(
			@PathVariable String username, @PathVariable Long id, @RequestBody Todo todo){
		service.save(todo);
		return ResponseEntity.ok().body( service.save(todo) );
	}
}
