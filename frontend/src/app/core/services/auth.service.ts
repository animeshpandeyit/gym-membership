import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl: string = 'http://localhost:4000/api/v1/users/new';

  private _loginUrl: string = 'http://localhost:4000/api/v1/users/login';

  private apiUrl: string = 'http://localhost:4000/api/v1/users/me';

  private logoutUrl: string = 'http://localhost:4000/api/v1/users/logout';

  constructor(private http: HttpClient, private _router: Router) {}

  register(customerData: any): Observable<any> {
    return this.http.post(this._registerUrl, customerData);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(this._loginUrl, user);
  }

  logoutUser(): Observable<any> {
    return this.http.get(this.logoutUrl);
  }

  getToken() {
    return !!localStorage.getItem('token');
  }

  // or this can be isLoggedIn() method to check if user is logged in or not!!!!

  getUserToken() {
    return localStorage.getItem('token') ?? '';
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('Token from AuthService:', token);

    if (!token) {
      console.error('Token is missing.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
