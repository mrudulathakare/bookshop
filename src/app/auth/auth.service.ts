import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  http: any;

  isSeller:boolean = false;

  login(username: string, password: string): Observable<any> {
    
    this.isLoggedIn = true;
    return this.http.post(URL, { username, password });
  }

  logout() {
    
    this.isLoggedIn = false;
  }
}
