import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl: string = 'http://localhost:4000/api/v1/users/new';

  private _loginUrl: string = 'http://localhost:4000/api/v1/users/login';

  constructor(private http: HttpClient) {}

  register(customerData: any): Observable<any> {
    return this.http.post(this._registerUrl, customerData);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post(this._loginUrl, user);
  }

  getToken() {
    return !!localStorage.getItem('token');
  }

  // removeToken(): void {
  //   localStorage.removeItem('token');
  // }
}
