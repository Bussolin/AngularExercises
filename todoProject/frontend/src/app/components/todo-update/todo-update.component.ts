import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../../services/data/todo/todo-data.service';
import { Todo } from '../list-to-do/list-to-do.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BasicAuthService } from '../../services/basicAuth/basic-auth.service';

@Component({
  selector: 'app-todo-update',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-update.component.html',
  styleUrl: './todo-update.component.css'
})
export class TodoUpdateComponent implements OnInit {
 
  todo : Todo = new Todo( 1, "" ,false, new Date());

  private activadesRoute = inject(ActivatedRoute);
  private basicAuth = inject(BasicAuthService);
  private route = inject( Router );
  private service = inject(TodoDataService);

  private id : number = 0;
  private username : string = this.basicAuth.getAuthenticatedUser();

  ngOnInit(): void {
    this.id = this.activadesRoute.snapshot.params['id']
    
    if( this.id != -1){
      this.service.getTodoById(this.username, this.id ).subscribe(
        data => {
         this.todo = data
        }
      );
    }
  }

  // id : number, description : string, date : Date
  updateTodo() {
    if( this.id != -1){
      this.service.updateTodo( this.username, this.id, this.todo ).subscribe();
    }else{
      this.service.createTodo(this.username, this.todo).subscribe();
    }
    this.goBack();

  }

  goBack() {this.route.navigate(['todos'])};

}
