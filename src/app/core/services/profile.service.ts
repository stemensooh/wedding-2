import { Injectable } from '@angular/core';
import { WeddingResponseDto } from '../dtos/wedding-response.dto';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HandleError,
  HttpErrorHandlerService,
} from './http-error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeddingRequestDto } from '../dtos/wedding.request.dto';

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
    this.handleError = httpErrorHandler.createHandleError('WeddingService');
  }
  get(): Observable<WeddingResponseDto> {
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .get<WeddingResponseDto>(url)
      .pipe(catchError(this.handleError<WeddingResponseDto>('getById')));
  }

  save(create: WeddingRequestDto){
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

    console.log(create);
    const url = `${this.urlApi}/`;
    return this.httpCliente
      .post<WeddingResponseDto>(url, create, { 'headers': headers })
      .pipe(catchError(this.handleError<WeddingResponseDto>('save')));
  }
}
