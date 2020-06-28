import { BasicAuthenticationService } from './../auth/basic/basic-authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const basicAuthToken = this.basicAuthService.getAuthenticatedToken();
    const authenticatedUser = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthToken && authenticatedUser) {
      req = req.clone({
        setHeaders: {
          Authorization: this.basicAuthService.getAuthenticatedToken()
        }
      });
    }

    return next.handle(req);
  }

}
