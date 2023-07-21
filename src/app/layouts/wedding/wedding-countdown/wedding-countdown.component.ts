import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-countdown',
  templateUrl: './wedding-countdown.component.html',
  styleUrls: ['./wedding-countdown.component.scss'],
})
export class WeddingCountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() wedding!: WeddingResponseDto;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.setTime(new Date(wedding.fecha));
    }
  }
  public seconds: number = 0;
  public timer: any;

  constructor() {
    // this.setTime();
  }

  ngOnInit() {}

  setTime(fecha: Date) {
    this.timer = setInterval(function () {
      var countDown = fecha.getTime();
      var now = new Date().getTime();
      var distance = countDown - now;
      document.getElementById('days')!.innerHTML = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      ).toString();

      document.getElementById('hours')!.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();

      document.getElementById('minutes')!.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();

      document.getElementById('seconds')!.innerHTML = Math.floor(
        (distance % (1000 * 60)) / 1000
      ).toString();
      
    }, this.seconds);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
