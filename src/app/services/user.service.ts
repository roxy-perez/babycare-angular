import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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

  register(user: User): Observable<User> {
    const baby = {
      name: user.Baby.name,
      birthday: user.Baby.birthday,
      communityCode: user.Baby.communityCode
    };
    const userData = {
      username: user.username,
      email: user.email,
      password: user.password,
      baby
    };
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  editProfile(username: string, name: string, email: string, password: string, newPassword: string): Observable<Object> {
    const url = `${this.apiUrl}/edit-profile`;
    const body = { username, name, email, password, newPassword };
    return this.http.put(url, body)
      .pipe(
        tap({
          next: (updatedUser) => {
            console.log('User updated:', updatedUser);
          },
          error: (error) => {
            console.error('Error updating user:', error);
          }
        })
      );
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
    return undefined;
  }

  getBabyId(): string {
    return this.user?.Baby?.id || '';
  }

  logOut(): void {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigateByUrl('/front');
  }

  getAllCommunities(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/communities`, {});
  }

}
