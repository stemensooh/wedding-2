import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  HandleError,
  HttpErrorHandlerService,
} from './http-error-handler.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpResult, httpOptions } from '../models/http';
import { catchError } from 'rxjs/operators';
import { SignUpDto } from '../dtos/auth/sign-up.dto';
import { SignInDto } from '../dtos/auth/sign-in.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlApi: string;
  private handleError!: HandleError;
  constructor(
    private httpCliente: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('AuthService');
    this.urlApi = environment.apiUrl + '/auth';
  }

  signIn(model: SignInDto): Observable<HttpResponse<HttpResult>> {
    const url = `${this.urlApi}/sign-in`;
    return this.httpCliente
      .post<HttpResult>(url, model, httpOptions)
      .pipe(catchError(this.handleError<HttpResponse<HttpResult>>('signIn')));
  }

  signUp(model: SignUpDto): Observable<HttpResponse<HttpResult>> {
    const url = `${this.urlApi}/sign-up`;
    return this.httpCliente
      .post<HttpResult>(url, model, httpOptions)
      .pipe(catchError(this.handleError<HttpResponse<HttpResult>>('signUp')));
  }
}
