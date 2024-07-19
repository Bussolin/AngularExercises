import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../../components/list-to-do/list-to-do.component';
import { API_URL } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  private http = inject(HttpClient);

  getTodos( username : string){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos` );
  }

  getTodoById( username : string, id : number ){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}` );
  }

  deleteTodo( username : string, id : number ){
    return this.http.delete<Todo>(`${API_URL}/users/${username}/todos/${id}` );
  }

  updateTodo( username : string, id : number, todo : Todo ){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo );
  }

  createTodo( username : string, todo : Todo ){
    return this.http.post(`${API_URL}/users/${username}/todos`, todo );
  }
}
