import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  apiUrl = 'http://localhost:3000/api/v1/appointment';

  constructor(public http: HttpClient) {}

  getAll(babyId: string): Observable<Object> {
    return this.http.get(`${this.apiUrl}/${babyId}`);
  }

  getOne(babyId: string, id: string): Observable<Object> {
    return this.http.get(`${this.apiUrl}/${babyId}/${id}`);
  }

  create(appointment: Appointment): Observable<Object> {
    return this.http.post(this.apiUrl, appointment);
  }

  update(id: string, appointment: Appointment): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, appointment);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
