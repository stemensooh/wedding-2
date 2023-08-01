import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import { ProfileCountdownComponent } from './profile-countdown/profile-countdown.component';
import { ProfileBlogComponent } from './profile-blog/profile-blog.component';
import { ProfileWhenNWhereComponent } from './profile-when-n-where/profile-when-n-where.component';
import { ProfileCounterComponent } from './profile-counter/profile-counter.component';
import { ProfileTestimonialComponent } from './profile-testimonial/profile-testimonial.component';
import { ProfileFooterComponent } from './profile-footer/profile-footer.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from '../core/services/profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FotoComponent } from '../shared/components/foto/foto.component';
import { ListaComponent } from '../shared/components/foto/lista/lista.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfileAboutComponent,
    ProfileBannerComponent,
    ProfileGalleryComponent,
    ProfileCountdownComponent,
    ProfileBlogComponent,
    ProfileWhenNWhereComponent,
    ProfileCounterComponent,
    ProfileTestimonialComponent,
    ProfileFooterComponent,
    ProfileNavComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FotoComponent,
    ListaComponent,
    SharedModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
