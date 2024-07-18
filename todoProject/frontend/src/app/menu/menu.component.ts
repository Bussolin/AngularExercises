import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardAuthenticationService } from '../services/hard-authentication.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  
  public authenticate = inject( HardAuthenticationService );

  ngOnInit(): void {
  }

}
