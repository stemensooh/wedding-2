import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMAGE_745_x_849 } from 'src/app/core/constants/images';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss']
})
export class ProfileAboutComponent implements OnChanges {
  @Input() form!: FormGroup;
  IMAGE = IMAGE_745_x_849;

  cargarImagen(imagenes: ImagenDto[]) {
    if (imagenes.length > 0) {
      this.form.patchValue({
        foto: imagenes[0].archivo,
      });
    }
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue){
      this.IMAGE = changes['form'].currentValue.value.foto;
    }
  }
}
