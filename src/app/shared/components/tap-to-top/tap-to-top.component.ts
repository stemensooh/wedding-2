import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap-to-top',
  templateUrl: './tap-to-top.component.html',
  styleUrls: ['./tap-to-top.component.scss']
})
export class TapToTopComponent implements OnInit {
  public showScroll: boolean = false;
  public showScrollHeight = 500;
  public hideScrollHeight = 10;

  constructor() { }

  ngOnInit() {
  }

  onActivate() {
    if (typeof window !== 'undefined') {
      const scrollToTop = window.setInterval(() => {
        const pos = window.scrollY;
        if (pos > 0) {
          window.scrollTo(0, pos - 200); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      if ((window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
        this.showScroll = true;
      }
      else if (this.showScroll && (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
        this.showScroll = false;
      }
    }
  }
}
