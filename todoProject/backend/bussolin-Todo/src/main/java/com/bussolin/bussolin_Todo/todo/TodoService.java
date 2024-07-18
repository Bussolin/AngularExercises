package com.bussolin.bussolin_Todo.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static Long idCounter = 0L;
	static {
		todos.add(new Todo(++idCounter,"Luis","AngularJS",LocalDate.now().minusMonths(2), true ));
		todos.add(new Todo(++idCounter,"Carlin","SpringBoot",LocalDate.now().minusYears(15) ,true));
		todos.add(new Todo(++idCounter,"Bussolin","VueJS",LocalDate.now().minusDays(12),false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteById( long id ) {
		Todo todo = findById( id );
		
		if( todo==null) return null;
		
		todos.remove(todo);
		
		return todo;
	}
	
	public Todo save(Todo todo) {
		if( todo.getId() != -1) {
			deleteById(todo.getId());
			todo.setId(0);
		}else {
			todo.setId(++idCounter);
		}
		todos.add(todo);
		return todo;
	}
	
	public Todo findById( long id ) {
		for( Todo todo:todos ) {
			if( todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
