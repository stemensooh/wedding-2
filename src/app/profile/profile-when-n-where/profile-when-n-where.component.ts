import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WhenDto } from 'src/app/core/dtos/when.dto';

@Component({
  selector: 'app-profile-when-n-where',
  templateUrl: './profile-when-n-where.component.html',
  styleUrls: ['./profile-when-n-where.component.scss']
})
export class ProfileWhenNWhereComponent {
  @Input() form!: FormGroup;
  formBloc!: FormGroup;
  blocs: WhenDto[] = [];
  closeResult = '';

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.formBloc = this.fb.group({
      id: [null],
      titulo: [null, Validators.required],
      hora: [Date, Validators.required],
      descripcion: [null, Validators.required],
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

  limpiar(){
    this.formBloc = this.fb.group({
      id: [null],
      titulo: [null, Validators.required],
      hora: [Date, Validators.required],
      descripcion: [null, Validators.required],
    });
  }

  eliminar(id: string){
    this.blocs = this.blocs.filter(x => x.id !== id)
  }

  guardar(content: any){
    
    if (!this.formBloc.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.blocs.push({
      ...this.formBloc.value,
      id: crypto.randomUUID()
    });

    this.form.patchValue({
      bloc: this.blocs
    });
    
    this.limpiar();
    this.getDismissReason(content)
  }

}
