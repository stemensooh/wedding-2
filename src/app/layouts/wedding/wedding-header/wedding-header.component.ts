import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-header',
  templateUrl: './wedding-header.component.html',
  styleUrls: ['./wedding-header.component.scss']
})
export class WeddingHeaderComponent implements OnInit, OnChanges {
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
