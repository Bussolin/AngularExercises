import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../../list-to-do/list-to-do.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  private http = inject(HttpClient);

  getTodos( username : string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  getTodoById( username : string, id : number ){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo( username : string, id : number ){
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }
}
