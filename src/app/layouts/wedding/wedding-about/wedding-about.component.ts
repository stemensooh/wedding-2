import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { About, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-about',
  templateUrl: './wedding-about.component.html',
  styleUrls: ['./wedding-about.component.scss']
})
export class WeddingAboutComponent implements OnInit , OnChanges {
  @Input() wedding!: WeddingResponseDto;
  about: About = {
    foto: 'assets/images/wedding-img/about-us.png'
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.about = wedding.abouts ? wedding.abouts[0] : {
        foto: 'assets/images/wedding-img/about-us.png'
      };
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
