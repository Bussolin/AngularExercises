import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardAuthenticationService {

  constructor() { }

  authenticateUser( user : string, password : string) : boolean{
    if(user === "luis" && password === "b"){
      sessionStorage.setItem('authenticatedUser',user);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
