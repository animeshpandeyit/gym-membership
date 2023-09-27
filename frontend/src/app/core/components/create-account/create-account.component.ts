import { Component, OnInit } from '@angular/core';
import { CreateRegistrationModel } from '../../models/create-registration.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  registrationModel: CreateRegistrationModel;

  registeredUser: any;
  // registerForm: any;

  constructor(
    private _auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.registrationModel = new CreateRegistrationModel();
  }

  ngOnInit(): void {}

  onSubmit() {
    this._auth.register(this.registrationModel).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error creating customer', error);
        const errorMessage = error.error.message;
        alert(errorMessage);
      }
    );
  }
}
