import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileControlServiceService } from './profile-control-service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeddingService } from '../core/services/wedding.service';
import { ProfileService } from '../core/services/profile.service';

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
    // this.sub.add(
    //   this.profileService.get().subscribe((data) => {
    //     console.log(data);
    //     this.form.patchValue({
    //       ...data
    //     });
    //   })
    // );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  guardarFormulario() {
    console.log(this.form.value);
  }

  get nav() {
    return this.form.get('nav') as FormGroup
  }

  get header() {
    return this.form.get('header') as FormGroup
  }

  get about() {
    return this.form.get('about') as FormGroup
  }

  get banner() {
    return this.form.get('banner') as FormGroup
  }

  get gallery() {
    return this.form.get('gallery') as FormGroup
  }

  get countdown() {
    return this.form.get('countdown') as FormGroup
  }

  get when() {
    return this.form.get('when') as FormGroup
  }

  get counter() {
    return this.form.get('counter') as FormGroup
  }

  get footer() {
    return this.form.get('footer') as FormGroup
  }

  get testimonial() {
    return this.form.get('testimonial') as FormGroup
  }

  get blog() {
    return this.form.get('blog') as FormGroup
  }

}
