import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMAGE_745_x_849 } from 'src/app/core/constants/images';
import { About, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-about',
  templateUrl: './wedding-about.component.html',
  styleUrls: ['./wedding-about.component.scss']
})
export class WeddingAboutComponent implements OnInit , OnChanges {
  @Input() wedding!: WeddingResponseDto;
  about: About = {
    foto: IMAGE_745_x_849
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.about = wedding.abouts ? wedding.abouts[0] : {
        foto: IMAGE_745_x_849
      };
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
