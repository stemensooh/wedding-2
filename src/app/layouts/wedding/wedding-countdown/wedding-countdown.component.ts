import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Countdown, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-countdown',
  templateUrl: './wedding-countdown.component.html',
  styleUrls: ['./wedding-countdown.component.scss'],
})
export class WeddingCountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() wedding!: WeddingResponseDto;
  fecha: Date | undefined;
  countdown?: Countdown;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.countdown = wedding.countdowns ? wedding.countdowns[0] : undefined;
      if (this.countdown) {
        this.fecha = new Date(this.countdown?.fecha ?? new Date())
        this.setTime(this.fecha);
        
      }
      
      
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
