import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pessoa } from "../modelo/Pessoa";
  
@Injectable({
    providedIn: 'root'
})

export class ListServiceService {

  private list = new Subject<Pessoa[]>();
  private listPessoa:Pessoa[] = []

  private indice = new Subject<Number>();
  private indiceNumero:number;

  sendList( list:Pessoa[] ) {
    this.listPessoa = list;
    this.list.next( list );
  }

  getList(): Observable<Pessoa[]>{ 
    return this.list.asObservable();
  }

  getListPessoa(): Pessoa[] {
    return this.listPessoa;
  }

  sendIndice( indice:number){
    this.indiceNumero = indice;
    this.indice.next( indice );
  }

  getIndice(){
    return this.indice;
  }

  getIndiceNumero(){
    return this.indiceNumero;
  }
}
