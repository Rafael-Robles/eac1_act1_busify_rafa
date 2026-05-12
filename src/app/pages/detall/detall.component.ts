import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    descripcio: `Bus numero ${i + 1} que opera en la linea ${linies[i % linies.length]}. Cubre el trayecto con ${30 + (i % 20)} plazas disponibles.`
  }));
}

const BUSOS = generarBusos();

@Component({
  selector: 'app-detall',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})
export class DetallComponent implements OnInit {
  bus: Bus | null = null;
  idParam: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(this.idParam);
    this.bus = BUSOS.find(b => b.id === id) ?? null;
  }
}