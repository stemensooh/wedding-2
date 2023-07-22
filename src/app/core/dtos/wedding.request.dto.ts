import { Time } from '@angular/common';
import { BlogDto } from './blog.dto';
import { ImagenDto } from './imagen.dto';
import { TestimonioDto } from './testimonio.dtp';
import { WhenDto } from './when.dto';

export interface WeddingRequestDto {
  nav: NavRequestDto;
  header: HeaderRequestDto;
  about: AboutRequestDto;
  banner: AboutRequestDto;
  gallery: ImagenDto[];
  countdown: CountdownRequestDto;
  blog: BlogDto[];
  when: WhenDto[];
  testimonial: TestimonioDto[];
}

export interface NavRequestDto {
  foto: string;
  mensaje: string;
}

export interface HeaderRequestDto {
  tituloPagina: string;
  titulo: string;
  foto: string;
}

export interface AboutRequestDto {
  foto: string;
  mensaje: string;
}

export interface BannerRequestDto {
  nombreNovia: string;
  nombreNovio: string;
  apellidoNovia: string;
  apellidoNovio: string;
  direccion1: string;
  direccion2: string;
}

export interface CountdownRequestDto {
  fecha: Date;
  hora: Time;
  direccion: string;
  url: string;
}

export interface HeaderRequestDto {}

export interface HeaderRequestDto {}

export interface HeaderRequestDto {}
