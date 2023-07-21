import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-wedding-gallery',
  templateUrl: './wedding-gallery.component.html',
  styleUrls: ['./wedding-gallery.component.scss'],
})
export class WeddingGalleryComponent implements OnInit {
  activeFilter = 'all';
  myOptions: NgxMasonryOptions = {
    gutter: 10,
  };
  updateMasonryLayout: boolean = false;

  constructor() {}

  ngOnInit() {}

  urlsAll: string[] = [
    'assets/images/wedding-img/photo-album/1.jpg',
    'assets/images/wedding-img/photo-album/2.jpg',
    'assets/images/wedding-img/photo-album/3.jpg',
    'assets/images/wedding-img/photo-album/1.jpg',
    'assets/images/wedding-img/photo-album/2.jpg',
  ];

  urlsDesign: string[] = [
    'assets/images/wedding-img/photo-album/1.jpg',
    'assets/images/wedding-img/photo-album/2.jpg',
  ];

  urlsGraphics: string[] = [
    'assets/images/wedding-img/photo-album/1.jpg',
    'assets/images/wedding-img/photo-album/2.jpg',
    'assets/images/wedding-img/photo-album/1.jpg',
  ];

  public filterImg(item: any) {
    this.activeFilter = item;
  }
}
