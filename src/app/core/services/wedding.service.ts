import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeddingResponseDto } from '../dtos/wedding-response.dto';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {
  private urlApi: string;
  constructor(private httpCliente: HttpClient) {
    this.urlApi = environment.apiUrl + '/wedding';
  }

  getAll() {
    const url = `${this.urlApi}/`;
    return this.httpCliente.get<WeddingResponseDto[]>(url);
  }

  getId(id: string) {
    const url = `${this.urlApi}/${id}`;
    return this.httpCliente.get<WeddingResponseDto>(url);
  }

  getTitulo(titulo: string) {
    const url = `${this.urlApi}/titulo/${titulo}`;
    return this.httpCliente.get<WeddingResponseDto>(url);
  }

}
