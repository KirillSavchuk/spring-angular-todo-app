import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  public authenticate(username: string, password: string): boolean {
    const isUserAuthenticated = this.isPasswrodCorrect(username, password);
    if (isUserAuthenticated) {
      sessionStorage.setItem('authenticatedUser', username);
    }
    return isUserAuthenticated;
  }

  public isPasswrodCorrect(username: string, password: string): boolean {
    return username === 'test' && password === 'test';
  }

  public isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return (user !== null);
  }

  public logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }

}
