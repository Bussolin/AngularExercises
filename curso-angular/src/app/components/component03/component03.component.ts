import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {
  one:String = 'assets/gokudrip.jpg'
  other:String = 'assets/gokubravo.jpg'
  imageVar:String = 'assets/gokudrip.jpg'

  //Alterar imagem
  changeImage(){
    
    if( this.imageVar === this.other ){
      this.imageVar = this.one
    }else{
      this.imageVar = this.other
    }
  }
}
