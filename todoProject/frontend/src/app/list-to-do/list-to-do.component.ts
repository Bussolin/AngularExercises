import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo/todo-data.service';
import { Router } from '@angular/router';

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
  private route = inject(Router);

  todos : Todo[] = [];
  message : string = "";

  ngOnInit(): void {
    this.refreshTodoList();
  }

  deleteTodo( id : number ){
    this.service.deleteTodo("luis",id ).subscribe(
      response => null,
      error => this.handleError( error )
    )
    this.refreshTodoList();
    this.message = "Deleted Sucessfully"
  }

  updateTodo( id : number) {
    this.route.navigate(['todos',id ])
  }

  refreshTodoList(){
    this.service.getTodos("luis").subscribe(
      response => this.todos = response,
      error => this.handleError(error)
    )
  }

  handleError( error : any ){
    console.log(error.error.message);
  }
}
