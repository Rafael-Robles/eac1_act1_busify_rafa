import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { of, map, delay, debounceTime } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html'
})
export class FormulariCercaComponent implements OnInit {

  validant = false;



  termeCerca = new FormControl(
    '',
    {
      validators: [
        Validators.minLength(2),
        Validators.maxLength(50)
      ],
      asyncValidators: [this.codiDisponibleValidator.bind(this)]
    }
  );


  
  constructor() {}



  ngOnInit() {
    this.termeCerca.valueChanges
      .pipe(debounceTime(400))
      .subscribe(value => {
        this.buscar(value || '');
      });
  }
  buscar(terme: string) {
    console.log('Buscant:', terme);
  }
  netejar() {
    this.termeCerca.setValue('');
  }





  codiDisponibleValidator(control: AbstractControl) {

    if (!control.value || control.value.length < 2) {
      return of(null);
    }
    this.validant = true;
    
    return of(control.value).pipe(

      delay(500),
      map(value => {
        this.validant = false;

        if (value === 'test') {
          return { sensResultats: true };
        }
        return null;
      })

    );
  }
}