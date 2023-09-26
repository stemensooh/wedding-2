import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileControlServiceService } from './profile-control-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { WeddingService } from '../core/services/wedding.service';
import { ProfileService } from '../core/services/profile.service';
import { WeddingRequestDto } from '../core/dtos/wedding.request.dto';
import { ImagenDto } from '../core/dtos/imagen.dto';
import { TestimonioDto } from '../core/dtos/testimonio.dtp';
import { WhenDto } from '../core/dtos/when.dto';
import { BlogDto } from '../core/dtos/blog.dto';
import { WeddingResponseDto } from '../core/dtos/wedding-response.dto';
import { AuthService } from '../core/services/auth.service';
import { UsuarioToken } from '../core/interfaces/usuario-token.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub = new Subscription();
  wedding!: WeddingResponseDto;
  usuarioToken?: UsuarioToken;
  tituloPagina: string | undefined = '';

  constructor(
    private authService: AuthService,
    private control: ProfileControlServiceService,
    private profileService: ProfileService,
    private _route: ActivatedRoute,
    private weddingService: WeddingService,
    private router: Router
  ) {
    this.form = this.control.toForm();
    this.usuarioToken = this.authService.getAuthToken();

    this.weddingService
      .getId(this.usuarioToken?.wedding?.id ?? '')
      .subscribe((data: WeddingResponseDto) => {
        this.wedding = data;
        this.form = control.toForm(this.wedding);
        this.tituloPagina = this.wedding.tituloPagina;
      });
  }

  ngOnInit(): void {
    const wedding = localStorage.getItem('wedding');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  valid() {
    return this.form.valid;
  }
  

  guardarFormulario() {
    
    if (!this.valid()) {
      this.form.markAllAsTouched();
      return;
    }

    const weddingId = this.form.value._id;

    const nav = this.nav.value;
    const header = this.header.value;
    const about = this.about.value;
    const banner = this.banner.value;
    const gallery = this.gallery.value.fotos as ImagenDto[];
    const countdown = this.countdown.value;
    const blog = this.blog.value.bloc as BlogDto[];
    const when = this.when.value.bloc as WhenDto[];
    const testimonial = this.testimonial.value.bloc as TestimonioDto[];

    const request: WeddingRequestDto = {
      _id: weddingId,
      nav: { ...nav, weddingId: weddingId },
      header: {
        ...header,
        weddingId: weddingId,
      },
      about: {
        ...about,
        weddingId: weddingId,
      },
      banner: { ...banner, weddingId: weddingId },
      gallery: [
        ...gallery.map((item) => {
          item.weddingId = weddingId;
          // item._id = undefined;
          return item;
        }),
      ],
      countdown: { ...countdown, weddingId: weddingId },
      blog: [
        ...blog.map((item) => {
          item.weddingId = weddingId;
          // item._id = undefined;
          return item;
        }),
      ],
      when: [
        ...when.map((item) => {
          item.weddingId = weddingId;
          // item._id = undefined;
          return item;
        }),
      ],
      testimonial: [
        ...testimonial.map((item) => {
          item.weddingId = weddingId;
          // item._id = undefined;
          return item;
        }),
      ],
    };

    if (request._id) {
      this.profileService.update(request).subscribe((response) => {
        console.log(response);
        if (response.status === 200) {
          this.router.navigate(['/profile']);
        }
      });
    } else {
      this.profileService.create(request).subscribe((response) => {
        if (response.status === 200) {
          this.router.navigate(['/profile']);
        }
      });
    }
  }

  cerrarSesion(){
    this.authService.signOut();
    this.router.navigate(['/auth/sign-in'])
  }

  get nav() {
    return this.form.get('nav') as FormGroup;
  }

  get header() {
    return this.form.get('header') as FormGroup;
  }

  get about() {
    return this.form.get('about') as FormGroup;
  }

  get banner() {
    return this.form.get('banner') as FormGroup;
  }

  get gallery() {
    return this.form.get('gallery') as FormGroup;
  }

  get countdown() {
    return this.form.get('countdown') as FormGroup;
  }

  get when() {
    return this.form.get('when') as FormGroup;
  }

  get counter() {
    return this.form.get('counter') as FormGroup;
  }

  get footer() {
    return this.form.get('footer') as FormGroup;
  }

  get testimonial() {
    return this.form.get('testimonial') as FormGroup;
  }

  get blog() {
    return this.form.get('blog') as FormGroup;
  }
}
