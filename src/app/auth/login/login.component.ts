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
    email:"",
    password:"",
  }
  errorMessage: string = '';
  http: any;

  constructor(private authService: AuthService, private router:Router) { }

  isLoading : boolean= false;

  isAuthincated : boolean= false;

  login() {
    if(this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
    
    
    const user = userCredential.user;
    if(this.form.email=="seller@gmail.com"){
      this.authService.isSeller=true;
      this.router.navigate(['/seller']);

    }
    else
    this.router.navigate([""]);
    
  })
  .catch((error) => {
    alert("Login failed");
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(() => (this.isLoading = false));
  
    
    this.authService.login(this.form.email, this.form.password)
      .subscribe(
        () => {
          this.router.navigate(['/home']);
          
        },
        (        error: any) => {
          this.errorMessage = 'Invalid username or password.';
        }
      );
  }
  

}
