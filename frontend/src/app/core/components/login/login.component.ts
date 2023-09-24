import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginUserDataModel } from '../../models/login-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  islogin: boolean = false;
  loginUserData = {
    email: '',
    password: '',
  };

  responseData: any;

  constructor(private router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  loginPage() {
    this.islogin = !this.islogin;
  }

  loginFirst() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        if (res && res.token != null) {
          // this.responseData = res;
          // console.log('responseData::', this.responseData);
          localStorage.setItem('token', res.token);
          // localStorage.setItem('token', JSON.stringify(res.token));
          this.router.navigate(['/user/home']);
        } else {
          console.log('Authentication failed. Token not received.');
        }
      },
      (err) => {
        console.log('Login error:', err);
      }
    );
  }
  // async loginFirst() {
  //   try {
  //     const res = await this._auth
  //       .loginUser(this.loginUserData)
  //       .subscribe((res) => {
  //         if (res.token) {
  //           localStorage.setItem('token', res.token);
  //           console.log('Token stored:', res.token);
  //           this.router.navigate(['/user/home']);
  //         } else {
  //           console.log('Authentication failed. Token not received.');
  //         }
  //       });
  //   } catch (err) {
  //     console.log('Login error:', err);
  //   }
  // }
}
