import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CuplerDto, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-banner',
  templateUrl: './wedding-banner.component.html',
  styleUrls: ['./wedding-banner.component.scss']
})
export class WeddingBannerComponent implements OnInit, OnChanges {
  @Input() wedding!: WeddingResponseDto;
  cupler: CuplerDto | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.cupler = wedding.cupler? wedding.cupler[0] : undefined;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
