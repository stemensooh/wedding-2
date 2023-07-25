import { Time } from '@angular/common';
import { BlogDto } from './blog.dto';
import { ImagenDto } from './imagen.dto';
import { TestimonioDto } from './testimonio.dtp';
import { WhenDto } from './when.dto';

export class WeddingRequestDto {
  _id?: string;
  nav?: NavRequestDto;
  header?: HeaderRequestDto;
  about?: AboutRequestDto;
  banner?: AboutRequestDto;
  gallery?: ImagenDto[];
  countdown?: CountdownRequestDto;
  blog?: BlogDto[];
  when?: WhenDto[];
  testimonial?: TestimonioDto[];
}

export class NavRequestDto {
  foto?: ImagenDto;
  mensaje?: string;
}

export class HeaderRequestDto {
  tituloPagina?: string;
  titulo?: string;
  foto?: ImagenDto;
}

export class AboutRequestDto {
  foto?: ImagenDto;
  mensaje?: string;
}

export class BannerRequestDto {
  nombreNovia?: string;
  nombreNovio?: string;
  apellidoNovia?: string;
  apellidoNovio?: string;
  direccion1?: string;
  direccion2?: string;
}

export class CountdownRequestDto {
  fecha?: string;
  hora?: string;
  direccion?: string;
  url?: string;
}