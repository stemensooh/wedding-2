import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  standalone: true,
  imports: [
    NgFor,
  ]
})
export class ListaComponent implements OnChanges {
  @Input() imagenes: ImagenDto[] = [];
  @Output() imagenesOut = new EventEmitter<ImagenDto[]>();
  @Output() vistaPrevia = new EventEmitter<string>();

  eliminarImagen(id: string){
    this.imagenes = this.imagenes.filter(x => x._id !== id);
    this.imagenesOut.emit(this.imagenes);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imagenes'].currentValue) {
      this.imagenes = changes['imagenes'].currentValue;
    }
  }

  verImagen(imagen: string){
    this.vistaPrevia.emit(imagen);
  }
}
