import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoDataService } from '../../services/data/todo/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthService } from '../../services/basicAuth/basic-auth.service';

export class Todo{
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ){}
}

@Component({
  selector: 'app-list-to-do',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent implements OnInit{

  private service = inject(TodoDataService);
  private basicAuth = inject(BasicAuthService);
  private route = inject(Router);

  todos : Todo[] = [];
  message : string = "";
  username = this.basicAuth.getAuthenticatedUser();

  ngOnInit(): void {
    this.refreshTodoList();
  }

  deleteTodo( id : number ){
    this.service.deleteTodo( this.username,id ).subscribe(
      () => this.refreshTodoList(),
      error => this.handleError( error ),
    )
    this.message = "Deleted Sucessfully"
  }

  updateTodo( id : number) {
    this.route.navigate(['todos',id ])
    this.refreshTodoList()
  }

  addTodo() {
    this.route.navigate(['todos', -1 ])
    this.refreshTodoList()
  }

  refreshTodoList(){
    this.service.getTodos(this.username ).subscribe(
      response => this.todos = response,
      error => this.handleError( error )
    )
  }

  handleError( error : any ){
    if( error != null) console.log(error.error.message);
  }
}
