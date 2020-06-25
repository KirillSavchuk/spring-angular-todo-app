import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username';
  password = '';
  isLoginValid = false;

  showInvalidLoginErrorMessage = false;
  invalidLoginErrorMessage = 'Invalid Credentials!';
  
  constructor(
    private router: Router, 
    private authService: HardcodedAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.isLoginValid = this.authService.authenticate(this.username, this.password);
    if (this.isLoginValid) {
      this.router.navigate(['welcome', this.username]);
    } else {
      this.showInvalidLoginErrorMessage = true;
    }
  }

}
