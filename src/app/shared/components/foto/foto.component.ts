import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CargaComponent } from './carga/carga.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { NgIf } from '@angular/common';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';
import { ListaComponent } from './lista/lista.component';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  standalone: true,
  imports: [NgIf, CargaComponent, VistaPreviaComponent, ListaComponent],
})
export class FotoComponent {
  @Input() multiple: boolean = false;
  @Input() medidas: string = '';
  @Input() mostrarLista: boolean = false;
  @Input() imagenes: ImagenDto[] = [];
  @Output() imagenesOut = new EventEmitter<ImagenDto[]>();

  constructor() {}

  agregarDocumento(imagen: ImagenDto) {
    if (!this.multiple) {
      this.imagenes = [];
    }
    this.medidas = imagen.archivo;
    this.imagenes.push(imagen);
    this.imagenesOut.emit(this.imagenes);
  }

  eliminarImagen(imagenes: ImagenDto[]) {
    this.imagenes = imagenes;
    this.imagenesOut.emit(this.imagenes);
  }

  verImagen(imagen: string){
    this.medidas = imagen;
  }
}
