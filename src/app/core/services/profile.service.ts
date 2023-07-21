import { Injectable } from '@angular/core';
import { WeddingResponseDto } from '../dtos/wedding-response.dto';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HandleError,
  HttpErrorHandlerService,
} from './http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private urlApi: string;
  private handleError!: HandleError;
  constructor(
    private httpCliente: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.urlApi = environment.apiUrl + '/profile';
    this.handleError = httpErrorHandler.createHandleError('WeddingService');
  }
  get(): Observable<WeddingResponseDto> {
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .get<WeddingResponseDto>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto>('getById')));
  }
}
