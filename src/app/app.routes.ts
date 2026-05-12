import { Routes } from '@angular/router';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';
import { CercaComponent } from './pages/cerca/cerca.component';
import { DetallComponent } from './pages/detall/detall.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'cataleg', pathMatch: 'full' },
  { path: 'cataleg', component: CatalegPageComponent, title: 'Busos — Llistat' },
  { path: 'cerca', component: CercaComponent, title: 'Cercar Bus' },
  { path: 'detall/:id', component: DetallComponent, title: 'Detall del Bus' },
  {
    path: 'preferits',
    loadComponent: () =>
      import('./pages/preferits/preferits.component').then(m => m.PreferitsComponent),
    canActivate: [authGuard],
    title: 'Els Meus Busos Preferits'
  },
  { path: 'login', component: LoginComponent, title: 'Iniciar Sessió' },
  { path: '**', redirectTo: 'cataleg' }
];