import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Observable } from 'rxjs';
import { RegisterForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  http: any;

  isSeller: boolean = false;
  isLoading: boolean = false;
  isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  login(form: any) {

    this.isLoggedIn = true;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (form.email == "seller@gmail.com") {
          this.isSeller = true;
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
  }

  register(form: RegisterForm) {

    if (form.password !== form.confirm_password) {
      alert("Confirm password does not match");
      return;
    }

    const auth = getAuth();
    this.isLoading = true;

    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;

        this.isAuthenticated = true;

        this.router.navigate(['/'])

        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorCode);

        alert(errorCode + ": " + errorMessage);
      }).finally (() => {
        this.isLoading = false;

      });

  }

  initAuthStateListener(): Promise<void> {
    return new Promise<void>((resolve) => {
      const auth = getAuth();

      // Check if user is already signed in
      if (auth.currentUser) {
        console.log('User is already signed in');
        this.isAuthenticated = true;
        resolve();
      }

      // Listen for auth state changes
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in.
          console.log('User is signed in');
          this.isAuthenticated = true;
        } else {
          // No user is signed in.
          console.log('No user is signed in');
          this.isAuthenticated = false;
        }
        resolve();
      });
    });
  }


  logout(): any {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("user logged out successfully");
      alert("Logged out successfully");
      sessionStorage.clear();
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.log(error);
    });
  }

  getEmail() {
    const auth = getAuth();

    return auth.currentUser?.email
  }
}
