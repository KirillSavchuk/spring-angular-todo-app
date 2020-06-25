import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username';
  password = '';
  errorMessage = 'Invalid Credentials!';
  invalidLogin = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.invalidLogin = !this.isLoginValid();
    if (!this.invalidLogin) {
      this.router.navigate(['welcome', this.username]);
    }
  }

  isLoginValid(): boolean {
    return this.username === 'test' && this.password === 'test';
  }

}
