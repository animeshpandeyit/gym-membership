import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}
  logoutUser() {
    this.router.navigate(['/login']);
    return localStorage.removeItem('token');
  }
}
