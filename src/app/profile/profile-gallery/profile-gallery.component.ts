import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.scss']
})
export class ProfileGalleryComponent {
  @Input() form!: FormGroup;
  imagenes: ImagenDto[] = []

  cargarImagen(imagenes: ImagenDto[]) {
    this.imagenes = imagenes;
    this.form.patchValue({
      fotos: imagenes,
    });

    console.log(this.form.value);
  }

  eliminarImagen(imagenes: ImagenDto[]) {
    this.imagenes = imagenes;

    this.form.patchValue({
      fotos: imagenes,
    });

    console.log(this.form.value);
  }
}
