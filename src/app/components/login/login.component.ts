import { Component, ElementRef, Injectable, ViewChild } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  @ViewChild('idInput', { static: false }) idRef !: ElementRef;
  @ViewChild('pwInput', { static: false }) pwRef !: ElementRef;
  
  onLogin() {
    const id = this.idRef.nativeElement.value;
    const pw = this.pwRef.nativeElement.value;
    this.loginService.onUserLogin(id, pw);
  }
}
