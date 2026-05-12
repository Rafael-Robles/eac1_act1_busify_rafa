import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BusCardComponent } from '../../components/bus-card/bus-card.component';
import { Bus } from '../../models/bus.model';

function generarBusos(): Bus[] {
  const linies = ['L1','L2','L3','L4','L5','L6','L7','L8','L9','L10'];
  const estats = ['Activo', 'En mantenimiento', 'Fuera de servicio'];
  const ciudades = [
    'Barcelona', 'Madrid', 'Valencia', 'Sevilla', 'Bilbao',
    'Zaragoza', 'Málaga', 'Alicante', 'Córdoba', 'Granada'
  ];

  return Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    linia: linies[i % linies.length],
    destinacio: `${ciudades[i % ciudades.length]} - Parada ${i + 1}`,
    places: 30 + (i % 20),
    estat: estats[i % estats.length],
    descripcio: ``
  }));
}

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule, ScrollingModule, BusCardComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent {
  busos = generarBusos();
  altadaElement = 100;
}