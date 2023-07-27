import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthControlService } from '../auth-control.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  formAuth!: FormGroup;

  constructor(private control: AuthControlService, private authService: AuthService) {
    this.formAuth = this.control.toFormSignUp();
  }

  onSumit(){
    console.log('onSumit', this.formAuth.value);
    if (!this.valid()){
      console.log('form no es valido');
    }

    this.authService.signUp({...this.formAuth.value }).subscribe((response) => {
      console.log(response)
    })
  }

  valid(){
    return this.formAuth.valid
  }
}
