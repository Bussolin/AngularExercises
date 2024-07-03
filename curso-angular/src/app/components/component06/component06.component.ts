import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component06.component.html',
  styleUrl: './component06.component.css'
})
export class Component06Component {
  linguagem:String = "CSS";
}
