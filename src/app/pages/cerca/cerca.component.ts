import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Bus } from '../../models/bus.model';

function generarBusos(): Bus[] {
  const linies = ['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10'];
  const ciudades = [
    'Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Bilbao',
    'Zaragoza', 'Málaga', 'Alicante', 'Córdoba', 'Granada'
  ];
  return Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    linia: linies[i % linies.length],
    destinacio: `${ciudades[i % ciudades.length]} - Parada ${i + 1}`,
    places: 30 + (i % 20),
    estat: ['Activo', 'En mantenimiento', 'Fuera de servicio'][i % 3],
    descripcio: `Bus ${i + 1}`
  }));
}

const BUSOS = generarBusos();

@Component({
  selector: 'app-cerca',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './cerca.component.html',
  styleUrl: './cerca.component.scss'
})
export class CercaComponent {
  terme = '';

  get resultats(): Bus[] {
    if (!this.terme.trim()) return [];
    const t = this.terme.toLowerCase();
    return BUSOS.filter(b =>
      b.linia.toLowerCase().includes(t) ||
      b.destinacio.toLowerCase().includes(t) ||
      b.estat.toLowerCase().includes(t)
    );
  }
}