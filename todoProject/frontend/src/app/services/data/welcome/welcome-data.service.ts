import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export class WelcomeBean{
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private http = inject(HttpClient);

  getWelcomeBean(){
    return this.http.get<WelcomeBean>('http://localhost:8080/welcome');
  }
}
