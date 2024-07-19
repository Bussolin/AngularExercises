import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeBean, WelcomeDataService } from '../../services/data/welcome/welcome-data.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ RouterLink, NgIf, WelcomeComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent{

  private route = inject( ActivatedRoute );
  private service = inject( WelcomeDataService );

  welcome : string = "";
  name = this.route.snapshot.params['name']

  getWelcomeMessage(){
    this.service.getWelcomeBean().subscribe(
      response => this.handleSucessWelcome( response ),
      error => this.handleErrorMessage(error)
    )
  }

  handleSucessWelcome( response: WelcomeBean ){
    this.welcome = response.message;
  }

  handleErrorMessage( error: any ){
    this.welcome = error.error.message
  }
}
