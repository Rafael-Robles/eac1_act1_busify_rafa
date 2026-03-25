import { Component, EventEmitter, Output } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {

  cerca: string = "";

  @Output() cercaCambiada = new EventEmitter<string>();

  onBuscar() {
    this.cercaCambiada.emit(this.cerca)
  }

}
