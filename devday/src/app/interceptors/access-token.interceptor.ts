import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {
  private token : string;

  constructor(private cookieService : CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.token) {
      this.token = this.cookieService.get('sessionToken')
    }
    return next.handle(this.addToken(request));
  }

  addToken(request: HttpRequest<any>) {
    let withToken
    if (this.token) {
      withToken = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      })
    } else {
      withToken = request;
    }

    console.log(withToken)

    return withToken
  }
}
