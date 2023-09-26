import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const user = this.auth.getAuthToken();
    if (user) {
      const authReq = req.clone({ setHeaders: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token')  ?? '' } });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
