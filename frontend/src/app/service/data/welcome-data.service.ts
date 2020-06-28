import { API_URL } from './../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class WelcomeResponseEntity {
  constructor(
    public message: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeWelcomeService(name: string): Observable<WelcomeResponseEntity> {
    return this.httpClient.get<WelcomeResponseEntity>(
      `${API_URL}/welcome/${name}`
    );
  }

}
