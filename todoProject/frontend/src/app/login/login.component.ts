import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardAuthenticationService } from '../services/hard-authentication.service';

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

  hangleLogin( ){
    this.invalidLogin = !this.authenticate.authenticateUser(this.name, this.password);
    if( !this.invalidLogin ){
      this.router.navigate(['welcome',this.name]);
    }
  }
}
