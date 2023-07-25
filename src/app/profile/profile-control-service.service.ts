import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { WeddingResponseDto } from '../core/dtos/wedding-response.dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileControlServiceService {
  constructor(private fb: FormBuilder) {}

  toForm(wedding?: WeddingResponseDto) {
    console.log(wedding);
    return this.fb.group({
      _id: [wedding?._id],
      nav: this.fb.group({
        foto: [wedding?.navcustoms ? wedding.navcustoms[0].foto : null],
        mensaje: [wedding?.navcustoms ? wedding.navcustoms[0].mensaje : null],
      }),
      header: this.fb.group({
        tituloPagina: [wedding?.tituloPagina, Validators.required],
        foto: [
          wedding?.headers ? wedding.headers[0].foto : null,
          Validators.required,
        ],
        mensaje: [
          wedding?.headers ? wedding.headers[0].mensaje : null,
          Validators.required,
        ],
      }),
      about: this.fb.group({
        foto: [
          wedding?.abouts ? wedding.abouts[0].foto : null,
          Validators.required,
        ],
        mensaje: [
          wedding?.abouts ? wedding.abouts[0].mensaje : null,
          Validators.required,
        ],
      }),
      banner: this.fb.group({
        nombreNovia: [
          wedding?.banners ? wedding.banners[0].nombreNovia : null,
          Validators.required,
        ],
        nombreNovio: [
          wedding?.banners ? wedding.banners[0].nombreNovio : null,
          Validators.required,
        ],
        apellidoNovia: [
          wedding?.banners ? wedding.banners[0].apellidoNovia : null,
          Validators.required,
        ],
        apellidoNovio: [
          wedding?.banners ? wedding.banners[0].apellidoNovio : null,
          Validators.required,
        ],
        direccion1: [
          wedding?.banners ? wedding.banners[0].direccion1 : null,
          Validators.required,
        ],
        direccion2: [
          wedding?.banners ? wedding.banners[0].direccion2 : null,
          Validators.required,
        ],
      }),
      gallery: this.fb.group({
        fotos: [wedding?.galleries ?? [], Validators.required],
      }),
      countdown: this.fb.group({
        fecha: [
          wedding?.countdowns ? wedding.countdowns[0].fecha : null,
          Validators.required,
        ],
        hora: [
          wedding?.countdowns ? wedding.countdowns[0].hora : null,
          Validators.required,
        ],
        direccion: [
          wedding?.countdowns ? wedding.countdowns[0].direccion : null,
          Validators.required,
        ],
        url: [
          wedding?.countdowns ? wedding.countdowns[0].url : null,
          Validators.required,
        ],
      }),
      blog: this.fb.group({
        bloc: [wedding?.blogs ? wedding.blogs : [], Validators.required],
      }),
      when: this.fb.group({
        bloc: [wedding?.whens ? wedding.whens : [], Validators.required],
      }),
      counter: this.fb.group({}),
      testimonial: this.fb.group({
        bloc: [
          wedding?.testimonials ? wedding.testimonials : [],
          Validators.required,
        ],
      }),
      footer: this.fb.group({}),
    });
  }
}
