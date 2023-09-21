import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutsRoutingModule } from "./layouts-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SwiperModule } from "swiper/angular";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMasonryModule } from "ngx-masonry";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { Ng5SliderModule } from 'ng5-slider';
import { SharedModule } from "../shared/shared.module";
import { GalleryModule } from "ng-gallery";
import { LightboxModule } from "ng-gallery/lightbox";

//Wedding Layout
import { WeddingComponent } from "./wedding/wedding.component";
import { WeddingNavComponent } from "./wedding/wedding-nav/wedding-nav.component";
import { WeddingHeaderComponent } from "./wedding/wedding-header/wedding-header.component";
import { WeddingAboutComponent } from "./wedding/wedding-about/wedding-about.component";
import { WeddingBannerComponent } from "./wedding/wedding-banner/wedding-banner.component";
import { WeddingGalleryComponent } from "./wedding/wedding-gallery/wedding-gallery.component";
import { WeddingCountdownComponent } from "./wedding/wedding-countdown/wedding-countdown.component";
import { WeddingBlogComponent } from "./wedding/wedding-blog/wedding-blog.component";
import { WeddingWhenNWhereComponent } from "./wedding/wedding-when-n-where/wedding-when-n-where.component";
import { WeddingCounterComponent } from "./wedding/wedding-counter/wedding-counter.component";
import { WeddingTestimonialComponent } from "./wedding/wedding-testimonial/wedding-testimonial.component";
import { WeddingBrandComponent } from "./wedding/wedding-brand/wedding-brand.component";
import { WeddingSubscribeComponent } from "./wedding/wedding-subscribe/wedding-subscribe.component";
import { WeddingFooterComponent } from "./wedding/wedding-footer/wedding-footer.component";
import { WeddingService } from "../core/services/wedding.service";
import { HttpClientModule } from "@angular/common/http";
import { WeddingInvitacionComponent } from './wedding/wedding-invitacion/wedding-invitacion.component';

@NgModule({
  declarations: [
    WeddingComponent,
    WeddingHeaderComponent,
    WeddingNavComponent,
    WeddingAboutComponent,
    WeddingBannerComponent,
    WeddingGalleryComponent,
    WeddingCountdownComponent,
    WeddingBlogComponent,
    WeddingWhenNWhereComponent,
    WeddingCounterComponent,
    WeddingTestimonialComponent,
    WeddingBrandComponent,
    WeddingSubscribeComponent,
    WeddingFooterComponent,
    WeddingInvitacionComponent,
    
  ],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule,
    LightboxModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng5SliderModule,
    NgxMasonryModule,
  ],

  exports: [
    
  ],
  providers: [
    HttpClientModule,
    WeddingService
  ]
})
export class LayoutsModule {}
