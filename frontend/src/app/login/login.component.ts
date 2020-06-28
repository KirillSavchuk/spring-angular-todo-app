import { BasicAuthenticationService } from './../service/auth/basic/basic-authentication.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/auth/hardcoded/hardcoded-authentication.service';

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
    private hardcodedAuthService: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  public handleHardcodedLogin(): void {
    console.log('#################');
    this.isLoginValid = this.hardcodedAuthService.authenticate(this.username, this.password);
    if (this.isLoginValid) {
      this.handleSuccessLogin();
    } else {
      this.handleFailedLogin();
    }
  }

  public handleBasicAuthLogin(): void {
    console.log(`username=${this.username}`);
    console.log(`password=${this.password}`);
    this.basicAuthService.executeBasicAuthenticationService(this.username, this.password).subscribe(
      response => this.handleSuccessLogin(),
      error => this.handleFailedLogin()
    );
  }

  private handleSuccessLogin(): void {
    this.router.navigate([`welcome`, this.username]);
  }

  private handleFailedLogin(): void {
    this.showInvalidLoginErrorMessage = true;
  }

}
