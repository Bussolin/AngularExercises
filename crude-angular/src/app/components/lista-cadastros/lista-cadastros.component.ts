import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Pessoa } from "../../modelo/Pessoa";
import { Subscription } from 'rxjs';
import { ListServiceService } from "../../services/list-service.service";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-cadastros',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './lista-cadastros.component.html',
  styleUrl: './lista-cadastros.component.css'
})

export class ListaCadastrosComponent {
  
  clickEventsubscription:Subscription;

  lista:Pessoa[] = [];
  
  constructor( private sharedService:ListServiceService ) {
    this.clickEventsubscription = this.sharedService.getList().subscribe(()=>{
      this.lista = this.sharedService.getListPessoa();
    })
  }

  selecionar( indice:number ){
    this.sharedService.sendIndice( indice );
  }
  
}
