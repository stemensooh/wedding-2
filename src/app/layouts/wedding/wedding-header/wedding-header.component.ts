import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IMAGE_1921_x_1100, IMAGE_714_x_720 } from 'src/app/core/constants/images';
import { Header, WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';

@Component({
  selector: 'app-wedding-header',
  templateUrl: './wedding-header.component.html',
  styleUrls: ['./wedding-header.component.scss']
})
export class WeddingHeaderComponent implements OnInit, OnChanges {
  IMAGE = IMAGE_1921_x_1100;
  @Input() wedding!: WeddingResponseDto;
  header: Header = {
    foto: IMAGE_714_x_720,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['wedding'].currentValue) {
      const wedding = changes['wedding'].currentValue as WeddingResponseDto;
      this.header = wedding.headers ? wedding.headers[0] : {
        foto: IMAGE_714_x_720,
      };

      this.IMAGE = wedding.navcustoms? (wedding.navcustoms[0].foto ? wedding.navcustoms[0].foto : IMAGE_1921_x_1100 ) : IMAGE_1921_x_1100;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  verInvitacion(){
    this.route.params.subscribe((params) => {

      this.router.navigate([params['titulo'], 'invitacion'])

    });

    
  }

}
