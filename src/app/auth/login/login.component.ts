import { Component, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../../types/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form: LoginForm = {
    email: "",
    password: "",
  }
  errorMessage: string = '';
  http: any;

  constructor(private authService: AuthService, private router: Router) { }

  isLoading: boolean = false;

  isAthenticated: boolean = false;

  login() {
    
    this.authService.login(this.form);
  }


}
