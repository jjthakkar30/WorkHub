import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  private users_creds = [
    {
      user_id: 'jinil@kdi.com',
      user_pw: 'open'
    }
  ];

  private isLoggedIn: Boolean = false;

  constructor(private router: Router) {}

  onUserLogin(id: string, pw: string) {
    for (const i of this.users_creds) {
      if(i.user_id === id && i.user_pw === pw) {
        this.isLoggedIn = true;
        this.router.navigate(['/home']); 
        break;
      }
    }
  }
}