import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WhenDto } from 'src/app/core/dtos/when.dto';

@Component({
  selector: 'app-profile-when-n-where',
  templateUrl: './profile-when-n-where.component.html',
  styleUrls: ['./profile-when-n-where.component.scss']
})
export class ProfileWhenNWhereComponent implements OnChanges {
  @Input() form!: FormGroup;
  formBloc!: FormGroup;
  blocs: WhenDto[] = [];
  closeResult = '';

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.formBloc = this.fb.group({
      uuid: [null],
      titulo: [null, Validators.required],
      hora: [null, Validators.required],
      descripcion: [null, Validators.required],
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue){
      this.blocs = changes['form'].currentValue.value.bloc;
    }
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
      uuid: [null],
      titulo: [null, Validators.required],
      hora: [null, Validators.required],
      descripcion: [null, Validators.required],
    });
  }

  eliminar(uuid: string){
    this.blocs = this.blocs.filter(x => x.uuid !== uuid);
    this.form.patchValue({
      bloc: this.blocs
    });
  }

  guardar(content: any){
    
    if (!this.formBloc.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.blocs.push({
      ...this.formBloc.value,
      uuid: crypto.randomUUID()
    });

    this.form.patchValue({
      bloc: this.blocs
    });
    
    this.limpiar();
    this.getDismissReason(content)
  }

}
