import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormArray, FormControl, Validators } from '@angular/forms';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html'
})
export class PreferitsPanelComponent {

  trackById(index: number, item: any) {
    return item.id;
  }

  trackByIndex(index: number) {
    return index;
  }
  constructor(public preferitsService: PreferitsService) {}

  formularis: { [key: string]: FormArray<FormControl<string>> } = {};

  obtenirFormArray(id: string): FormArray<FormControl<string>> {

    if (!this.formularis[id]) {

      const array = new FormArray<FormControl<string>>([]);
      const preferit = this.preferitsService.preferits().find(p => p.id === id);

      if (preferit?.notes?.length) {
        preferit.notes.forEach(nota => {
          array.push(
            new FormControl(nota, {
              nonNullable: true,
              validators: [Validators.minLength(3), Validators.required]
            })
          );
        });
      }
      array.valueChanges.subscribe(val => {
        this.preferitsService.actualitzarNotes(id, val);
      });

      this.formularis[id] = array;
    }

    return this.formularis[id];
  }
  
  afegirNota(id: string) {
    this.obtenirFormArray(id).push(
      new FormControl('', {
        nonNullable: true,
        validators: [Validators.minLength(3), Validators.required]
      })
    );
  }

  eliminarNota(id: string, index: number) {
    this.obtenirFormArray(id).removeAt(index);
  }
}