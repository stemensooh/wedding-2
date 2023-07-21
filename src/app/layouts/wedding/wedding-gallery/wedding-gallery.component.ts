import { AnimationMetadataType } from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import {
  GalleryDto,
  WeddingResponseDto,
} from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-gallery',
  templateUrl: './wedding-gallery.component.html',
  styleUrls: ['./wedding-gallery.component.scss'],
})
export class WeddingGalleryComponent implements OnInit, OnChanges {
  @ViewChild('masonry') masonry!: NgxMasonryComponent
  @Input() wedding!: WeddingResponseDto;
  fotos: GalleryDto[] = [];
  activeFilter = 'all';
  myOptions: NgxMasonryOptions = {
    originTop: true,
    // gutter: 0,
    // columnWidth: 80,
    // percentPosition: true,
    // horizontalOrder: true
    // animations: {
    //   show: [
    //     {
    //       type: AnimationMetadataType.Animate
    //     }
    //   ]
    // }
  };
  
  updateMasonryLayout: boolean = false;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.fotos = wedding.galleries;
    }
  }

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
