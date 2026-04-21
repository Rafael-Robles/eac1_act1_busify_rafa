import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({ providedIn: 'root' })
export class PreferitsService {

  private storageKey = 'preferits-cataleg';
  private favoritos = signal<ElementCataleg[]>([]);

  preferits = this.favoritos.asReadonly();
  totalPreferits = computed(() => this.favoritos().length);




  constructor() {
    this.carregarPreferits();
  }

  


  private carregarPreferits() {
    try {
      const dades = localStorage.getItem(this.storageKey);
      if (dades) {
        this.favoritos.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits', error);
    }
  }
  private guardarPreferits() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.favoritos()));
    } catch (error) {
      console.error('Error guardant preferits', error);
    }
  }




  actualitzarNotes(id: string, notes: string[]) {
    const actuals = this.favoritos().map(el => {
      if (el.id === id) {
        return { ...el, notes };
      }
      return el;
    });

    this.favoritos.set(actuals);
    this.guardarPreferits();
  }
  afegirPreferit(element: ElementCataleg): void {
    const actuals = this.favoritos();

    if (!this.esPreferit(element.id)) {
      this.favoritos.set([
        ...actuals,
        { ...element, notes: [] }
      ]);
      this.guardarPreferits();
    }
  }
  eliminarPreferit(id: string): void {
    const filtrats = this.favoritos().filter(el => el.id !== id);
    this.favoritos.set(filtrats);
    this.guardarPreferits();
  }
  esPreferit(id: string): boolean {
    return this.favoritos().some(el => el.id === id);
  }
}