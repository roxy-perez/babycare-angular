import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000';
  user: User;

  constructor(public http: HttpClient) {}

  login(email: string, password: string): Observable<Object> {
    return this.http.post(`${this.apiUrl}/login`, {
      email,
      password,
    });
  }
}
