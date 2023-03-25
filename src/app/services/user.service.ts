import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000/api/v1/user';
  user: User;

  constructor(public http: HttpClient, public router: Router) {
    this.user = this.getSession();
  }

  login(email: string, password: string): Observable<Object> {
    return this.http.post(`${this.apiUrl}/login`, {
      email,
      password,
    });
  }

  saveSession(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getSession(): User {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      return user;
    }
    return null;
  }

  getBabyId(): string {
    return this.user.Baby.id;
  }

  logOut(): void {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigateByUrl('/front');
  }
}
