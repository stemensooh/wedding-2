import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMAGE_745_x_849 } from 'src/app/core/constants/images';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnChanges {
  @Input() form!: FormGroup;
  IMAGE = IMAGE_745_x_849;
  IMAGE2 = IMAGE_745_x_849;
  URL_DEPLOY = environment.urlDeploy;

  cargarImagen(imagenes: ImagenDto[]) {
    if (imagenes.length > 0) {
      this.form.patchValue({
        foto: imagenes[0].archivo,
      });
    }
  }

  cargarInvitacion(imagenes: ImagenDto[]) {
    if (imagenes.length > 0) {
      this.form.patchValue({
        invitacion: imagenes[0].archivo,
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue) {
      this.IMAGE = changes['form'].currentValue.value.foto;
      this.IMAGE2 = changes['form'].currentValue.value.invitacion;
      if (changes['form'].currentValue.value.tituloPagina){
        this.URL_DEPLOY = environment.urlDeploy + changes['form'].currentValue.value.tituloPagina;
      }
    }
  }

  onKeyupEvent(){
    this.form.patchValue({
      tituloPagina: (this.form.value.tituloPagina as string).replaceAll(' ', '-')
    });

    this.URL_DEPLOY = environment.urlDeploy + this.form.value.tituloPagina;
  }
}
