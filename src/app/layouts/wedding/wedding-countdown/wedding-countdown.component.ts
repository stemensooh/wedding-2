import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-countdown',
  templateUrl: './wedding-countdown.component.html',
  styleUrls: ['./wedding-countdown.component.scss'],
})
export class WeddingCountdownComponent implements OnInit, OnDestroy {
  public seconds: number = 0;
  public timer: any;

  constructor() {
    this.setTime();
  }

  ngOnInit() {}

  setTime() {
    this.timer = setInterval(function () {
      var countDown = new Date('dec 30, 2020 00:00:00').getTime();
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
