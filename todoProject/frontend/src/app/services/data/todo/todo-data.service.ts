import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../../list-to-do/list-to-do.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  private http = inject(HttpClient);

  getTodos( username : string){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`, { headers:this.basicAuthenticatedHeader()});
  }

  getTodoById( username : string, id : number ){

    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, { headers:this.basicAuthenticatedHeader()});
  }

  deleteTodo( username : string, id : number ){
    let headers = this.basicAuthenticatedHeader();
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,  { headers});
  }

  updateTodo( username : string, id : number, todo : Todo ){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo, { headers:this.basicAuthenticatedHeader()});
  }

  createTodo( username : string, todo : Todo ){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo, { headers:this.basicAuthenticatedHeader()});
  }

  basicAuthenticatedHeader() : HttpHeaders {
    let username = "dev";
    let password = "123";
    let basicAuthenticatedHeader = "BASIC " + window.btoa(username + ":" + password)

    let headers = new HttpHeaders({
      Authorization:basicAuthenticatedHeader
    })
    return headers;
  }
}
