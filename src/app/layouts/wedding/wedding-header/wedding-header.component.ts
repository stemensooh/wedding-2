import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMAGE_714_x_720 } from 'src/app/core/constants/images';
import { Header, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-header',
  templateUrl: './wedding-header.component.html',
  styleUrls: ['./wedding-header.component.scss']
})
export class WeddingHeaderComponent implements OnInit, OnChanges {
  @Input() wedding!: WeddingResponseDto;
  header: Header = {
    foto: IMAGE_714_x_720,

  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.header = wedding.headers ? wedding.headers[0] : {
        foto: IMAGE_714_x_720,

      };
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
