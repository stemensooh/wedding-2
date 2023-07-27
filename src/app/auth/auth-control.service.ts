import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthControlService {

  constructor(private fb: FormBuilder) {}

  toFormSignIn() {
    return this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
   }

   toFormSignUp() {
    return this.fb.group({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
   }
}
