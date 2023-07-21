import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent {
  @Input() form!: FormGroup;

  cargarImagen(imagenes: ImagenDto[]) {
    if (imagenes.length > 0) {
      this.form.patchValue({
        foto: imagenes[0],
      });

      console.log(this.form.value);
    }
  }
}
