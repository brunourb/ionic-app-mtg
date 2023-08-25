import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract-service';
import { map, Observable } from 'rxjs';
import { ModelCard } from '../shared/card';

@Injectable()
export class CardsService extends AbstractService<ModelCard,number>{
    
      //injeção de dependência
    constructor(private http: HttpClient) {
      super();
    }

    listar(): Observable<ModelCard> {
      return this.http.get<ModelCard>(this.url);
    }
    buscar(id: number): Observable<ModelCard> {
      return this.http.get<ModelCard>(`${this.url}/${id}`);
    }
    criar(objeto: ModelCard): Observable<ModelCard> {
      return this.http.post<ModelCard>(this.url, objeto);
    }
    atualizar(objeto: ModelCard): Observable<ModelCard> {
      return this.http.patch<ModelCard>(this.url, objeto);
    }
    deletar(id: number): void {
      this.http.delete(`${this.url}/${id}`);
    }



}
