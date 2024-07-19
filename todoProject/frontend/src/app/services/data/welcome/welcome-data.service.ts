import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../../../app.constants';

export class WelcomeBean{
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private http = inject(HttpClient);

  getWelcomeBean(){
    return this.http.get<WelcomeBean>(`${API_URL}/welcome`);
  }
}
