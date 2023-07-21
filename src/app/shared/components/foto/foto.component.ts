import { Component, Output, EventEmitter } from '@angular/core';
import { CargaComponent } from './carga/carga.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { NgIf } from '@angular/common';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  standalone: true,
  imports: [
    NgIf,
    CargaComponent,
    VistaPreviaComponent,
  ]
})
export class FotoComponent {

  @Output() imagenesOut = new EventEmitter<ImagenDto[]>();
  imagenes: ImagenDto[] = [];

  constructor(){

  }

  agregarDocumento(imagen: ImagenDto){
    this.imagenes.push(imagen);
    this.imagenesOut.emit(this.imagenes);
  }

}
