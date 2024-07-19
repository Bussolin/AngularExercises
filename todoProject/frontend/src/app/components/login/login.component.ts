import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardAuthenticationService } from '../../services/auth/hard-authentication.service';
import { BasicAuthService } from '../../services/basicAuth/basic-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  name : string = "";
  password : string = "";
  invalidLogin : boolean = false;

  private router = inject(Router);
  private authenticate = inject(HardAuthenticationService);
  private basicauthenticate = inject(BasicAuthService);

  hangleLogin( ){
    this.basicauthenticate.basicAuthentication( this.name, this.password ).subscribe(
      response =>{
        console.log(response)
        this.invalidLogin = false;
        this.router.navigate(['welcome',this.name]);
      },
      () => {
        this.invalidLogin = true;
      }
    )
  }
}
