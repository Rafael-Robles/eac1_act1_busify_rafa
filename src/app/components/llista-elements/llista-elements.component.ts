import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { parades } from '../../mocks/dades-mock';
import { Element } from "../../models/element.model";

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, FormsModule, TargetaElementComponent, BarraCercaComponent],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  parades: Element[] = parades;
  filtrat: Element[] = parades;
  

  filtrarParades(textCerca: string) {
    const text = textCerca.toLowerCase();
    this.filtrat = this.parades.filter(parada =>
      parada.nom.toLowerCase().includes(text) ||
      parada.valor.toString().includes(text)
    );
  }

  trackById(index: number, parada: Element) {
    return parada.id;
  }
}
