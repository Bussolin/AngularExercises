import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component05',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component05.component.html',
  styleUrl: './component05.component.css'
})
export class Component05Component {
  nomes:String[] = ["Luis", "Carlos", "Bussolin", "Filho"]
}
