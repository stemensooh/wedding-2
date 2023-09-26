import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Blog, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-blog',
  templateUrl: './wedding-blog.component.html',
  styleUrls: ['./wedding-blog.component.scss']
})
export class WeddingBlogComponent implements OnInit, OnChanges {
  @Input() wedding!: WeddingResponseDto;
  blogs: Blog[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.blogs = wedding.blogs ?? [];
      // console.log(this.blogs)
    }
  }
  constructor() { }

  ngOnInit() {
  }

blagCarouselOptions=
  {
    items: 3,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        }   ,
        1024: {
            items: 2
        }
    }
  }
}
