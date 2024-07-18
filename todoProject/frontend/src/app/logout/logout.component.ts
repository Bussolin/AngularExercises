import { Component, inject, OnInit } from '@angular/core';
import { HardAuthenticationService } from '../services/hard-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{

  authenticate = inject(HardAuthenticationService);
  
  ngOnInit(): void {
      
      this.authenticate.logout();
  }
}
