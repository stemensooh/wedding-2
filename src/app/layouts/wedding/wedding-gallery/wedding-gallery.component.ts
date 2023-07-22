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
import { ImagenDto } from 'src/app/core/dtos/imagen.dto';
import {
  Gallery,
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
  fotos: Gallery[] = [];
  activeFilter = 'all';
  myOptions: NgxMasonryOptions = {
    originTop: true
  };

  updateMasonryLayout: boolean = false;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.fotos = wedding.galleries ?? [];
    }
  }


  public filterImg(item: any) {
    this.activeFilter = item;
  }
}
