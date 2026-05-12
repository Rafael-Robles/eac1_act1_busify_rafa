import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  errorLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    const ok = this.authService.login(this.email, this.contrasenya);
    if (ok) {
      this.errorLogin = false;
      this.router.navigate(['/preferits']);
    } else {
      this.errorLogin = true;
    }
  }
}