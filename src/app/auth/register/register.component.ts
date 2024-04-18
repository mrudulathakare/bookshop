import { Component } from '@angular/core';
import { RegisterForm } from '../../types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: RegisterForm = {
    email: "",
    name: "",
    password: "",
    confirm_password: "",

  }
  registrationSuccess: boolean = false;
  router: any;

  constructor (private authService: AuthService) {}

  register() {
    this.authService.register(this.form);
  }

}