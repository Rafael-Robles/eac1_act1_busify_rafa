import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../serveis/preferits.service';
import { PreferitsPanelComponent } from "../../components/preferits-panel/preferits-panel.component";

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent, PreferitsPanelComponent],
  templateUrl: './cataleg-page.component.html'
})
export class CatalegPageComponent implements OnInit {

  constructor(public elementService: ElementService, public preferitsService: PreferitsService) {}

  ngOnInit() {
    this.elementService.obtenirPopulars();
  }
}