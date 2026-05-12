import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Bus } from '../../models/bus.model';

@Component({
  selector: 'app-bus-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  templateUrl: './bus-card.component.html',
  styleUrl: './bus-card.component.scss'
})
export class BusCardComponent {
  @Input() bus!: Bus;
}