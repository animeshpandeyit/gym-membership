import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  islogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  loginPage() {
    this.islogin = !this.islogin;
  }

  loginFirst() {
    this.router.navigate(['/user/home']);
  }
}
