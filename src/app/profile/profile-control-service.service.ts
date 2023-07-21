import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileControlServiceService {

  constructor(private fb: FormBuilder) {}

  toForm() {
    return this.fb.group({
      _id: [null],
      nav: this.fb.group({
        foto: [null, Validators.required],
        mensaje: [null]
      }),
      header: this.fb.group({
        foto: [null],
        mensaje: [null],
      }),
      about: this.fb.group({
        foto: [null],
        mensaje: [null],
      }),
      banner: this.fb.group({
        nombres: [null],
        direccion1: [null],
        direccion2: [null]
      }),
      gallery: this.fb.group({
        fotos: [[]]
      }),
      countdown: this.fb.group({
        fecha: [null],
        direccion: [null]
      }),
      blog: this.fb.group({
        bloc: [[]]
      }),
      when: this.fb.group({
        bloc: [[]]
      }),
      counter: this.fb.group({

      }),
      testimonial: this.fb.group({
        bloc: [[]]
      }),
      footer: this.fb.group({

      }),
    });
  }
}
