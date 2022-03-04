import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addContentType(request));
  }

  addContentType(request: HttpRequest<any>) {
    let withHeaders = request.clone({
      setHeaders: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log(withHeaders)

    return withHeaders
  }
}
