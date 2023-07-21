import { Component } from '@angular/core';
import { CargaComponent } from './carga/carga.component';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';
import { NgIf } from '@angular/common';

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

}
