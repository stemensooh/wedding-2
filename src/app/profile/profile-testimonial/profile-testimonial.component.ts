import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogDto } from 'src/app/core/dtos/blog.dto';
import { TestimonioDto } from 'src/app/core/dtos/testimonio.dtp';

@Component({
  selector: 'app-profile-testimonial',
  templateUrl: './profile-testimonial.component.html',
  styleUrls: ['./profile-testimonial.component.scss']
})
export class ProfileTestimonialComponent implements OnChanges {
  @Input() form!: FormGroup;

  
  formBloc!: FormGroup;

  blocs: TestimonioDto[] = [];
  closeResult = '';

  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    this.formBloc = this.fb.group({
      uuid: [null],
      autor: [null, Validators.required],
      parentezco: [null, Validators.required],
      descripcion: [null, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'].currentValue){
      this.blocs = changes['form'].currentValue.value.bloc;
    }
  }

  valid() {
    return this.formBloc.valid;
  }

  guardar(content: any){
    
    if (!this.valid()) {
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

  limpiar(){
    this.formBloc = this.fb.group({
      uuid: [null],
      autor: [null, Validators.required],
      parentezco: [null],
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

  eliminar(uuid: string){
    this.blocs = this.blocs.filter(x => x.uuid !== uuid);
    this.form.patchValue({
      bloc: this.blocs
    });
  }
}

