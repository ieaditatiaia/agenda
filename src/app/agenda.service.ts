import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

//private baseUrl = 'http://localhost:8080/api/v1/events';
private baseUrl = 'https://ieadi-agenda.herokuapp.com/api/v1/events';

  constructor(private http: HttpClient) { }

    public criar(event: Event): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}`, event);
    }

  public listar(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  public semanal(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/semanal`);
  }

}
