import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo/todo-data.service';
import { Todo } from '../list-to-do/list-to-do.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-update.component.html',
  styleUrl: './todo-update.component.css'
})
export class TodoUpdateComponent implements OnInit {
 
  todo : Todo = new Todo( 1,'',false,new Date());
  private route = inject(ActivatedRoute);
  // private goBack() {this.route.navigate(['todos'])};
  private service = inject(TodoDataService);
  private id : number = 0;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getTodoById("luis", this.id ).subscribe(
      data => {
       this.todo = data
      }
    );
    
  }

  // id : number, description : string, date : Date
  updateTodo() {
    console.log("Updated");
    // this.goBack();

  }

  cancelTransation(){
    console.log("cancel");
    // this.goBack();
  }

}
