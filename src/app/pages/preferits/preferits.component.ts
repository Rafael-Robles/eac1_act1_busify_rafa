import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-preferits',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preferits.component.html',
  styleUrl: './preferits.component.scss'
})
export class PreferitsComponent {
  usuari$;

  constructor(private authService: AuthService) {
    this.usuari$ = this.authService.obtenirUsuari();
  }
}