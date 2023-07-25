import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogDto } from 'src/app/core/dtos/blog.dto';

@Component({
  selector: 'app-profile-blog',
  templateUrl: './profile-blog.component.html',
  styleUrls: ['./profile-blog.component.scss'],
})
export class ProfileBlogComponent implements OnChanges {
  @Input() form!: FormGroup;

  formBloc!: FormGroup;

  blocs: BlogDto[] = [];
  closeResult = '';
  imagen: string = '';

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.formBloc = this.fb.group({
      id: [null],
      titulo: [null, Validators.required],
      fecha: [Date, Validators.required],
      lugar: [null, Validators.required],
      descripcion: [null, Validators.required],
      foto: [null, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue){
      this.blocs = changes['form'].currentValue.value.bloc;
    }
  }

  guardar(content: any){
    
    if (!this.formBloc.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.blocs.push({
      ...this.formBloc.value,
      foto: this.imagen,
      id: crypto.randomUUID()
    });

    this.form.patchValue({
      bloc: this.blocs
    });
    
    this.limpiar();
    this.getDismissReason(content)
  }

  convertFileToBase64(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files?.length) {
      const file = fileInput.files[0];
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imagen = (reader.result as string);
          return resolve(reader.result);
        }
        reader.onerror = reject;
      });
    }

    return null
  }

  limpiar(){
    this.imagen = '';
    this.formBloc = this.fb.group({
      id: [null],
      titulo: [null, Validators.required],
      fecha: [Date, Validators.required],
      lugar: [null, Validators.required],
      descripcion: [null, Validators.required],
      foto: [null, Validators.required],
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  eliminar(id: string){
    this.blocs = this.blocs.filter(x => x.id !== id)
  }
}
