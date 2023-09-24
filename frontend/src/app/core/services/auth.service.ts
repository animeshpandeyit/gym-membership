import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  getProfile(): Observable<any> {
    debugger;
    const token = localStorage.getItem('token');
    console.log('Token::', token);
    if (!token) {
      console.error('Token is missing.');
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set(
      // 'Authorization',
      // `Bearer ${localStorage.getItem('token')}`
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get(this.apiUrl, { headers });
  }

  logoutUser(): Observable<any> {
    return this.http.get(this.logoutUrl);
  }

  getToken() {
    return !!localStorage.getItem('token');
  }

  // or this can be isLoggedIn() method to check if user is logged in or not!!!!

  getUserToken() {
    return localStorage.getItem('token') || '';
  }

  // UserData
}
