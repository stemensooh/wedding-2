import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeddingResponseDto } from '../dtos/wedding-response.dto';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HandleError,
  HttpErrorHandlerService,
} from './http-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class WeddingService {
  private urlApi: string;
  private handleError!: HandleError;
  constructor(
    private httpCliente: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('WeddingService');
    this.urlApi = environment.apiUrl + '/wedding';
  }

  getAll() {
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .get<WeddingResponseDto[]>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto[]>('getAll')));
  }

  getId(id: string) {
    const url = `${this.urlApi}/${id}`;
    return this.httpCliente
      .get<WeddingResponseDto>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto>('getId')));
  }

  getTitulo(titulo: string) {
    const url = `${this.urlApi}/titulo/${titulo}`;
    return this.httpCliente
      .get<WeddingResponseDto>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto>('getTitulo')));
  }

  getInvitacion(titulo: string) {
    const url = `${this.urlApi}/invitacion/${titulo}`;
    return this.httpCliente
      .get<WeddingResponseDto>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto>('getInvitacion')));
  }
}
