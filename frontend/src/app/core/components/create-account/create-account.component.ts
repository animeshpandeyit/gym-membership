import { Component, OnInit } from '@angular/core';
import { CreateRegistrationModel } from '../../models/create-registration.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  registrationModel: CreateRegistrationModel;

  registeredUser: any;

  constructor(private _auth: AuthService, private router: Router) {
    this.registrationModel = new CreateRegistrationModel();
  }

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.registrationModel);
    this._auth.register(this.registrationModel).subscribe(
      (res) => {
        // console.log(res);
        const registeredUser = res as any;
        // console.log('registeredUser::', registeredUser);
      },
      (error) => {
        // Handle error
        console.error('Error creating customer', error);
      }
    );
  }
}
