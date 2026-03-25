import { Component, Input } from '@angular/core';
import { Element } from "../../models/element.model"
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input({required: true}) element!: Element
}
