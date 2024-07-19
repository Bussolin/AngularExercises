import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../../app.constants';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor() { }

  private http = inject(HttpClient);

  basicAuthentication( username :string, 
                       password : string){
    let basicAuthentication = "BASIC " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthentication
    })
    
    let auth : AuthenticateBean = new AuthenticateBean("");
    return this.http.get<AuthenticateBean>(`${API_URL}/basicauth`, {headers}).pipe(
      map( 
        data => {
        sessionStorage.setItem( AUTHENTICATED_USER, username );
        sessionStorage.setItem(TOKEN, basicAuthentication);
        return data;
        }
      )
    );
  }

  getAuthenticatedUser() : string {
    let username = sessionStorage.getItem( AUTHENTICATED_USER );
    if( username != null ) return username
    return "";
  }

  getToken() : string | null{
    if( this.getAuthenticatedUser() ) return sessionStorage.getItem(TOKEN)  
    return null;
  }

  isUserLoggedIn(){
    let user = this.getAuthenticatedUser();
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem( AUTHENTICATED_USER );
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticateBean{
  
  constructor( public message : string) { }
}