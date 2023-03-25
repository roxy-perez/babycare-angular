import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Poo } from '../models/poo';

@Injectable({
  providedIn: 'root',
})
export class PooService {
  apiUrl = 'http://localhost:3000/api/v1/poo';

  constructor(public http: HttpClient) {}

  getAll(babyId: string): Observable<Object> {
    return this.http.get(`${this.apiUrl}/${babyId}`);
  }

  create(poo: Poo): Observable<Object> {
    return this.http.post(this.apiUrl, poo);
  }
}
