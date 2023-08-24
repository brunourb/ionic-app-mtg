import { Card } from '../shared/card';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from './abstract-service';
import { map, Observable } from 'rxjs';

@Injectable()
export class CardsService extends AbstractService<Card,number>{
    
      //injeção de dependência
    constructor(private http: HttpClient) {
      super();
    }

    listar(): Observable<Card[]> {
      return this.http.get<Card[]>(this.url);
    }
    buscar(id: number): Observable<Card> {
      return this.http.get<Card>(`${this.url}/${id}`);
    }
    criar(objeto: Card): Observable<Card> {
      return this.http.post<Card>(this.url, objeto);
    }
    atualizar(objeto: Card): Observable<Card> {
      return this.http.patch<Card>(this.url, objeto);
    }
    deletar(id: number): void {
      this.http.delete(`${this.url}/${id}`);
    }



}
