import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  islogin: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}
  loginPage() {
    this.islogin = !this.islogin;
  }

  loginFirst() {
    this.router.navigate(['/user/home']);
    console.log(this.loginForm.value);
  }
}
