import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  
  usuari$;

  constructor(public authService: AuthService) {
    this.usuari$ = this.authService.obtenirUsuari();
  }

  logout(): void {
    this.authService.logout();
  }
}