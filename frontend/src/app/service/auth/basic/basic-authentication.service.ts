import { API_URL } from './../../../app.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const AUTHENTOCATED_USER = 'authenticatedUser';
export const AUTH_TOKEN = 'authToken';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public executeBasicAuthenticationService(username: string, password: string): Observable<BasicAuthResponse> {
    const basicAuthHeaderValue = this.createBasicAuthHeaderValue(username, password);
    const options = {
      headers: this.createBasicAuthHeader(basicAuthHeaderValue)
    };

    return this.httpClient.get<BasicAuthResponse>(`${API_URL}/auth/basic`, options).pipe(
      map(
        response => {
          sessionStorage.setItem(AUTHENTOCATED_USER, username);
          sessionStorage.setItem(AUTH_TOKEN, basicAuthHeaderValue);
          return response;
        }
      )
    );
  }

  private createBasicAuthHeaderValue(username: string, password: string): string {
    return 'Basic ' + window.btoa(`${username}:${password}`);
  }

  private createBasicAuthHeader(basicAuthHeaderValue: string): HttpHeaders {
    return new HttpHeaders({
      Authorization: basicAuthHeaderValue
    });
  }

  public getAuthenticatedUser(): string {
    return sessionStorage.getItem(AUTHENTOCATED_USER);
  }

  public getAuthenticatedToken(): string | null {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(AUTH_TOKEN);
    }
  }

  public isUserLoggedIn(): boolean {
    const user = this.getAuthenticatedUser();
    return (user !== null);
  }

  public logout(): void {
    sessionStorage.removeItem(AUTHENTOCATED_USER);
  }

}

export class BasicAuthResponse {
  constructor(public message: string) { }
}
