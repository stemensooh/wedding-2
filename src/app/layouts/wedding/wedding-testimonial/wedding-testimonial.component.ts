import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Testimonial, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-testimonial',
  templateUrl: './wedding-testimonial.component.html',
  styleUrls: ['./wedding-testimonial.component.scss']
})
export class WeddingTestimonialComponent implements OnInit , OnChanges {
  @Input() wedding!: WeddingResponseDto;
  testimonials: Testimonial[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.testimonials = wedding.testimonials ?? [];
    }
  }

  constructor() { }

  ngOnInit() {
  }

  testimonial11s=[
    {
      img:"assets/images/wedding-img/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      name:"Alan Lakor",
      designation:"CEO OF SC."
    },
    {
      img:"assets/images/wedding-img/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      name:"Alan Lakor",
      designation:"CEO OF SC."
    },
    {
      img:"assets/images/wedding-img/testimonial/quote.png",
      review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.",
      name:"Alan Lakor",
      designation:"CEO OF SC."
    }
]

testimonialCarouselOptions={
  items: 1,
  margin: 0,
  dots: false,
  nav: false,
  autoplay: true,
  slideSpeed: 300,
  paginationSpeed: 400,
  loop: true 
}
}
