import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-nav',
  templateUrl: './wedding-nav.component.html',
  styleUrls: ['./wedding-nav.component.scss'],
})
export class WeddingNavComponent implements OnInit, OnDestroy, OnChanges {
  @Input() wedding!: WeddingResponseDto;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
    }
  }

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
