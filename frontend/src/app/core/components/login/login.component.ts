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

/* The `loginUserData` object is used to store the email and password entered by the user during the
login process. It is initialized with empty strings for both properties. */
  loginUserData = {
    email: '',
    password: '',
  };

  // loginUserData = {};

  constructor(private router: Router, private _auth: AuthService) {}

  ngOnInit(): void {}

  loginPage() {
    this.islogin = !this.islogin;
  }

  loginFirst() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log('res::', res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          console.log('Token stored:', res.token);

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
}
