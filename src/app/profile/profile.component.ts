import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileControlServiceService } from './profile-control-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeddingService } from '../core/services/wedding.service';
import { ProfileService } from '../core/services/profile.service';
import { WeddingRequestDto } from '../core/dtos/wedding.request.dto';
import { ImagenDto } from '../core/dtos/imagen.dto';
import { TestimonioDto } from '../core/dtos/testimonio.dtp';
import { WhenDto } from '../core/dtos/when.dto';
import { BlogDto } from '../core/dtos/blog.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  form: FormGroup;
  sub = new Subscription();

  constructor(
    private control: ProfileControlServiceService,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
    this.form = control.toForm();
  }

  ngOnInit(): void {
    const wedding = localStorage.getItem('wedding');

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  guardarFormulario() {
    console.log(this.form.value);

    localStorage.setItem('wedding', JSON.stringify(this.form.value));

    const nav = this.nav.value;
    const header = this.header.value;
    const about = this.about.value;
    const banner = this.banner.value;
    const gallery = this.gallery.value.fotos as ImagenDto[];
    const countdown = this.countdown.value;
    const blog = this.blog.value.bloc as BlogDto[];
    const when = this.when.value.bloc as WhenDto[];
    const testimonial = this.testimonial.value.bloc as TestimonioDto[];
    // const request: WeddingRequestDto = {};


    const request: WeddingRequestDto = {
      _id: '',
      nav: nav,
      header: {
        ...header,
        foto: header.foto?.archivo??''
      },
      about: {
        ...about,
        foto: about.foto?.archivo??''
      },
      banner: banner,
      gallery: [
        ...gallery.map(item => {
          item.id = undefined;
          return item
        })
      ],
      countdown: countdown,
      blog: [
        ...blog.map(item => {
          item.id = undefined;
          return item;
        })
      ],
      when: [
        ...when.map(item => {
          item.id = undefined;
          return item;
        })
      ],
      testimonial: [
        ...testimonial.map(item => {
          item.id = undefined;
          return item;
        })
      ],
    };

    this.profileService.save(request).subscribe((data) => {
      console.log('Response', data);
    });
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
