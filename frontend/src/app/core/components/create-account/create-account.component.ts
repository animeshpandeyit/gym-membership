import { Component, OnInit } from '@angular/core';
import { CreateRegistrationModel } from '../../models/create-registration.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  registrationModel: CreateRegistrationModel;

  registeredUser: any;

  constructor(
    private _auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.registrationModel = new CreateRegistrationModel();
  }

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.registrationModel);
    this._auth.register(this.registrationModel).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        // const token = res.token;
        console.log('Token stored register:', res.token);
      },
      (error) => {
        console.error('Error creating customer', error);

        const errorMessage = error.error.message;
        alert(errorMessage);
      }
    );
  }
}
