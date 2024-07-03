import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css'
})
export class Component04Component {
  display:boolean = true;

  displaySquare(){
    if( this.display === true ){
      this.display = false;
    }else{
      this.display = true;
    }
  }
}
