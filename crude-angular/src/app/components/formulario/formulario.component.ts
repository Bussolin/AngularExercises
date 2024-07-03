import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from "../../modelo/Pessoa";
import { Subscription } from 'rxjs';
import { ListServiceService } from "../../services/list-service.service";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  
  clickEventsubscription:Subscription;
  btnCadastrar:boolean = true;
  lista:Pessoa[] = [];
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required ,Validators.minLength( 2 ) ]),
    idade: new FormControl(null,[Validators.required ,Validators.min(0), Validators.max(200)]),
    cidade: new FormControl('',[Validators.required ,Validators.minLength( 2 )])
  });


  constructor(private sharedService:ListServiceService) {
    this.clickEventsubscription = this.sharedService.getIndice().subscribe(()=>{
      this.formulario.setValue( this.lista[ this.sharedService.getIndiceNumero() ]);
      this.btnCadastrar = false;
    })
  }
  
  ngOnInit() {
  }


  cadastrar(){
    this.lista.push( this.formulario.value as Pessoa );
    this.formulario.reset();
    this.sharedService.sendList( this.lista );
  }

  alterar(){
    this.lista[ this.sharedService.getIndiceNumero() ] = this.formulario.value as Pessoa;
    this.sharedService.sendList( this.lista );
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  remover(){
    this.lista.splice( this.sharedService.getIndiceNumero(), 1 ); 
    this.sharedService.sendList( this.lista );
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = false;
  }


}

