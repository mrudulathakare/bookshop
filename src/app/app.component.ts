import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyBookApp';

  constructor(private authService: AuthService) {};
  

  ngOnInit() {
    // Initialize Firebase
    initializeApp(firebaseConfig);

    this.authService.initAuthStateListener();

  }
}