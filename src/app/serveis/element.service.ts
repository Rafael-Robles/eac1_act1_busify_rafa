import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ElementApiResponse } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';
import { ElementCataleg } from '../models/element.model';


@Injectable({ providedIn: 'root' })
export class ElementService {

  private apiUrl = environment.apiUrl;
  private elementos = signal<ElementCataleg[]>([]);
  private cargando = signal<boolean>(false);
  private err = signal<string | null>(null);

  elements = this.elementos.asReadonly();
  carregant = this.cargando.asReadonly();
  error = this.err.asReadonly();

  constructor(private http: HttpClient) {}

  obtenirPopulars(): void {
    this.cargando.set(true);
    this.err.set(null);

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}/elements?popular=true`)
      .subscribe({
        next: (data) => {
          this.elementos.set(adaptarElementsApi(data));
          this.cargando.set(false);
        },
        error: () => {
          this.err.set('Error carregant els elements');
          this.cargando.set(false);
        }
      });
  }

  cercar(terme: string): void {
    this.cargando.set(true);
    this.err.set(null);

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}/elements?nom_like=${terme}`)
      .subscribe({
        next: (data) => {
          this.elementos.set(adaptarElementsApi(data));
          this.cargando.set(false);
        },
        error: () => {
          this.err.set('Error en la cerca');
          this.cargando.set(false);
        }
      });
  }
}