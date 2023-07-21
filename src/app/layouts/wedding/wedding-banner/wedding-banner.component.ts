import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-banner',
  templateUrl: './wedding-banner.component.html',
  styleUrls: ['./wedding-banner.component.scss']
})
export class WeddingBannerComponent implements OnInit, OnChanges {
  @Input() wedding!: WeddingResponseDto;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
