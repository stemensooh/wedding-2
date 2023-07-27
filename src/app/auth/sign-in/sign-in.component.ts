import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthControlService } from '../auth-control.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  formAuth!: FormGroup;

  constructor(private control: AuthControlService, private authService: AuthService) {
      this.formAuth = this.control.toFormSignIn();
  }

  onSumit(){
    console.log('onSumit', this.formAuth.value);
    if (!this.valid()){
      console.log('form no es valido');
    }

    this.authService.signIn({...this.formAuth.value }).subscribe((response) => {
      console.log(response)
    })
  }

  valid(){
    return this.formAuth.valid
  }
}
