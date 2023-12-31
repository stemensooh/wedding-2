import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeddingResponseDto, When } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-when-n-where',
  templateUrl: './wedding-when-n-where.component.html',
  styleUrls: ['./wedding-when-n-where.component.scss'],
})
export class WeddingWhenNWhereComponent implements OnInit, OnChanges {
  @Input() wedding!: WeddingResponseDto;
  eventos: When[] = [];
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.eventos = wedding.whens ?? [];
    }
  }

  places = [
    {
      img: 'assets/images/wedding-img/when/1.png',
      function: 'ceremony',
      time: '7 : 00 pm',
      des1: 'Hailey Jacson',
      des2: 'BLVD Menlo park',
      des3: 'CA',
    },
    {
      img: 'assets/images/wedding-img/when/1.png',
      function: 'ceremony',
      time: '7 : 00 pm',
      des1: 'Hailey Jacson',
      des2: 'BLVD Menlo park',
      des3: 'CA',
    },
    {
      img: 'assets/images/wedding-img/when/1.png',
      function: 'ceremony',
      time: '7 : 00 pm',
      des1: 'Hailey Jacson',
      des2: 'BLVD Menlo park',
      des3: 'CA',
    },
  ];

  placeCarouselOptions = {
    items: 3,
    margin: 85,
    nav: true,
    dots: false,
    navText: [
      '<img src="assets/images/wedding-img/when/next.png">',
      '<img src="assets/images/wedding-img/when/prev.png">',
    ],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
        margin: 35,
      },
    },
  };
}
