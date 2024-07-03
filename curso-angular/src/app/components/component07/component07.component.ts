import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {
  
  //cores teste
  corAtivaBool:boolean = true;
  corAtivaString:string = "yellow";
  lista:string[][] = [["Luis","90"],["Teste","52"],["teste2","83"]];

  getCorString(): string {
    return 'red';
  }
  
  getCorStringAprovado( nota:string ):string{

    if( parseInt( nota ) > 60 ){
      return 'green'
    }else{
      return 'red'
    }
  }
}
