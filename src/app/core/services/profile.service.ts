import { Injectable } from '@angular/core';
import { WeddingResponseDto } from '../dtos/wedding-response.dto';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HandleError,
  HttpErrorHandlerService,
} from './http-error-handler.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeddingRequestDto } from '../dtos/wedding.request.dto';
import { HttpResult, httpOptions } from '../models/http';
import { ViewHistoryResponse } from '../dtos/view-history-response.dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private urlApi: string;
  private handleError!: HandleError;

  constructor(
    private httpCliente: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.urlApi = environment.apiUrl + '/profile';
    this.handleError = httpErrorHandler.createHandleError('ProfileService');
  }
  get(): Observable<WeddingResponseDto> {
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .get<WeddingResponseDto>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto>('getById')));
  }

  create(create: WeddingRequestDto): Observable<HttpResponse<HttpResult>>  {
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .post<HttpResult>(url, create, httpOptions)
      .pipe(catchError(this.handleError<HttpResponse<HttpResult>>('create')));
  }

  update(update: WeddingRequestDto): Observable<HttpResponse<HttpResult>> {
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .put<HttpResult>(url, update, httpOptions)
      .pipe(catchError(this.handleError<HttpResponse<HttpResult>>('update')));
  }

  getHistory(titulo: string) {
    const url = `${this.urlApi}/history/${titulo}`;

    return this.httpCliente
      .get<ViewHistoryResponse[]>(url)
      .pipe(catchError(this.handleError<ViewHistoryResponse[]>('getHistory')));
  }

  crearHistory(titulo: string) {
    const url = `${this.urlApi}/history/${titulo}`;

    return this.httpCliente
      .post(url, null, httpOptions)
      .pipe(catchError(this.handleError('crearHistory')));

    // return this.httpCliente.post(url);
  }
}
