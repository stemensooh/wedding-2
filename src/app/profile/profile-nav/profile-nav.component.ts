import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IMAGE_745_x_849 } from 'src/app/core/constants/images';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';
import { CustomizerService } from 'src/app/shared/service/customizer.service';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss'],
})
export class ProfileNavComponent implements OnChanges {
  @Input() form!: FormGroup;
  IMAGE = IMAGE_745_x_849;

  constructor(
    public customize: CustomizerService,
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.customizeLayoutVersion('light');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue) {
      this.IMAGE = changes['form'].currentValue.value.foto;
    }
  }

  customizeLayoutVersion(val: any) {
    this.customize.setLayoutVersion(val);
  }

  customizeLayoutType(val: any) {
    this.customize.setLayoutType(val);
  }

  cargarImagen(imagenes: ImagenDto[]) {
    if (imagenes.length > 0) {
      this.form.patchValue({
        foto: imagenes[0].archivo,
      });
    }
  }
}
