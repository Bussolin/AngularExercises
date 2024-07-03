import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component09',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component09.component.html',
  styleUrl: './component09.component.css'
})
export class Component09Component {
  nome:string = "";
  cidade:string = "";
}
