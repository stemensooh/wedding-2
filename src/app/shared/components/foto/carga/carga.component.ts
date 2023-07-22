import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CargaComponent implements OnInit {
  @Input() tiposDocumentosCarga: string = '0';
  @Output() imagen = new EventEmitter<ImagenDto>();

  form: FormGroup;
  isLoadingResults: boolean = false;

  constructor(
    private fb: FormBuilder // private sharedService: SharedService
  ) {
    this.form = this.fb.group({
      archivo: [null],
      nombre: [null, Validators.required],
      tipo: [null],
      id: [null],
    });
  }

  ngOnInit(): void {}

  uploadFile(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files) {
      const file = fileInput.files[0];
      if (file.size <= environment.MAX_FILE_SIZE_BYTE) {
        this.isLoadingResults = true;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result as string;
          const data = result.split(',');
          const doc: ImagenDto = {} as ImagenDto;
          doc.tipo = data[0].replace('data:', '').split(';')[0];
          doc.archivo = result;
          doc.nombre = file.name;
          doc.id = crypto.randomUUID();

          this.form.patchValue(doc);

          fileInput.files = null;
          
          this.isLoadingResults = false;
        };
        reader.onerror = () => (this.isLoadingResults = false);
      } else {
        // this.sharedService.showErrorMessage(`El archivo es demasiado grande, el límite es ${(environment.MAX_FILE_SIZE_BYTE/1024/1024)}MB.`);
      }
    }
  }

  guardarFoto() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const documento = this.form.value;

    this.imagen.emit(documento);

    this.form = this.fb.group({
      archivo: [null],
      nombre: [null, Validators.required],
      tipo: [null],
      id: [null],
    });
  }
}
