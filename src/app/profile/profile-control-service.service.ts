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
        _id: [
          wedding?.navcustoms && wedding?.navcustoms.length > 0
            ? wedding.navcustoms[0]._id
            : undefined,
        ],
        foto: [
          wedding?.navcustoms && wedding?.navcustoms.length > 0
            ? wedding.navcustoms[0].foto
            : undefined,
        ],
        mensaje: [
          wedding?.navcustoms && wedding?.navcustoms.length > 0
            ? wedding.navcustoms[0].mensaje
            : undefined,
        ],
      }),
      header: this.fb.group({
        _id: [
          wedding?.headers && wedding?.headers.length > 0
            ? wedding.headers[0]._id
            : undefined,
        ],
        tituloPagina: [
          wedding?.tituloPagina,
          // {
          //   value: wedding?.tituloPagina,
          //   disabled: wedding,
          // },
          Validators.required,
        ],
        foto: [
          wedding?.headers && wedding?.headers.length > 0
            ? wedding.headers[0].foto
            : undefined,
          Validators.required,
        ],
        mensaje: [
          wedding?.headers && wedding?.headers.length > 0
            ? wedding.headers[0].mensaje
            : undefined,
          Validators.required,
        ],
      }),
      about: this.fb.group({
        _id: [
          wedding?.abouts && wedding?.abouts.length > 0
            ? wedding.abouts[0]._id
            : undefined,
        ],
        foto: [
          wedding?.abouts && wedding?.abouts.length > 0
            ? wedding.abouts[0].foto
            : undefined,
          Validators.required,
        ],
        mensaje: [
          wedding?.abouts && wedding?.abouts.length > 0
            ? wedding.abouts[0].mensaje
            : undefined,
          Validators.required,
        ],
      }),
      banner: this.fb.group({
        _id: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0]._id
            : undefined,
        ],
        nombreNovia: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0].nombreNovia
            : undefined,
          Validators.required,
        ],
        nombreNovio: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0].nombreNovio
            : undefined,
          Validators.required,
        ],
        apellidoNovia: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0].apellidoNovia
            : undefined,
          Validators.required,
        ],
        apellidoNovio: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0].apellidoNovio
            : undefined,
          Validators.required,
        ],
        direccion1: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0].direccion1
            : undefined,
          Validators.required,
        ],
        direccion2: [
          wedding?.banners && wedding?.banners.length > 0
            ? wedding.banners[0].direccion2
            : undefined,
          Validators.required,
        ],
      }),
      gallery: this.fb.group({
        fotos: [
          wedding?.galleries
            ? wedding.galleries.map((item) => {
              item.uuid = crypto.randomUUID();
                return item;
              })
            : [],
          Validators.required,
        ],
      }),
      countdown: this.fb.group({
        _id: [
          wedding?.countdowns && wedding?.countdowns.length > 0
            ? wedding.countdowns[0]._id
            : undefined,
        ],
        fecha: [
          wedding?.countdowns && wedding?.countdowns.length > 0
            ? wedding.countdowns[0].fecha
            : undefined,
          Validators.required,
        ],
        hora: [
          wedding?.countdowns && wedding?.countdowns.length > 0
            ? wedding.countdowns[0].hora
            : undefined,
          Validators.required,
        ],
        direccion: [
          wedding?.countdowns && wedding?.countdowns.length > 0
            ? wedding.countdowns[0].direccion
            : undefined,
          Validators.required,
        ],
        url: [
          wedding?.countdowns && wedding?.countdowns.length > 0
            ? wedding.countdowns[0].url
            : undefined,
          Validators.required,
        ],
      }),
      blog: this.fb.group({
        bloc: [
          wedding?.blogs
            ? wedding.blogs.map((item) => {
              item.uuid = crypto.randomUUID();
                return item;
              })
            : [],
          Validators.required,
        ],
      }),
      when: this.fb.group({
        bloc: [
          wedding?.whens
            ? wedding.whens.map((item) => {
              item.uuid = crypto.randomUUID();
                return item;
              })
            : [],
          Validators.required,
        ],
      }),
      counter: this.fb.group({}),
      testimonial: this.fb.group({
        bloc: [
          wedding?.testimonials
            ? wedding.testimonials.map((item) => {
              item.uuid = crypto.randomUUID();
                return item;
              })
            : [],
          Validators.required,
        ],
      }),
      footer: this.fb.group({}),
    });
  }
}
