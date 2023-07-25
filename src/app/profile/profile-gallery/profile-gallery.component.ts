import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';
import { IMAGE_453_x_313 } from '../../core/constants/images';
import { Gallery } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.scss']
})
export class ProfileGalleryComponent implements OnChanges {
  
  @Input() form!: FormGroup;
  imagenes: ImagenDto[] = []
  IMAGE = IMAGE_453_x_313;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue){
      this.imagenes = changes['form'].currentValue.value.fotos;
    }
  }
  
  cargarImagen(imagenes: ImagenDto[]) {
    this.imagenes = imagenes;
    this.form.patchValue({
      fotos: imagenes,
    });
  }

  eliminarImagen(imagenes: ImagenDto[]) {
    this.imagenes = imagenes;
    this.form.patchValue({
      fotos: imagenes,
    });
  }
}
