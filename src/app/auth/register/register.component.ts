import { Component } from '@angular/core';
import {RegisterForm} from '../../types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: RegisterForm = {
    email:"",
    name: "",
    password:"",
    confirm_password: "",

  }
  registrationSuccess:boolean=false;
  router: any;

  
  
register(){
  if(this.form.password!==this.form.confirm_password){
    return;
  }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(userCredential);
    this.registrationSuccess=true;
    this.router.navigate(['/seller']);

    
  })
  .catch((error: { code: any; message: any; }) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  

}

