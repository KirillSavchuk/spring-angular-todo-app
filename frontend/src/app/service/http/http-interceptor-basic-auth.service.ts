import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: this.createBasicAuthHeaderValue()
      }
    });
    return next.handle(req);
  }

  private createBasicAuthHeaderValue(): string {
    const username = 'test';
    const password = 'test';
    return 'Basic ' + window.btoa(`${username}:${password}`);
  }

}
