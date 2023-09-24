import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // userDetails: any;
  user: any;
  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }
  logoutUser() {
    this._authService.logoutUser().subscribe((res) => {
      console.log('result::', res);
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
    });
  }

  getUserDetails() {
    debugger;
    this._authService.getProfile().subscribe(
      (response: any) => {
        this.user = response.user;
        debugger;
      }
      // ,
      // (error) => {
      //   console.error('Error fetching user profile:', error);
      // }
    );
  }
}

//   getUserDetails() {
//     this._authService
//       .getProfile()
//       .pipe(
//         tap((response) => {
//           this.user = response.user;
//         }),
//         catchError((error) => {
//           console.error('Error fetching user profile:', error);
//           throw error; // rethrow the error to propagate it to the subscriber
//         })
//       )
//       .subscribe();
//   }
// }
