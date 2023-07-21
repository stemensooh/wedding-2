import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';
import { WeddingService } from 'src/app/core/services/wedding.service';
import { ColorScssService } from 'src/app/shared/service/color-scss.service';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss'],
})
export class WeddingComponent implements OnInit {
  wedding!: WeddingResponseDto;

  constructor(
    public colorPicker: ColorScssService,
    private route: ActivatedRoute,
    private title: Title,
    private weddingService: WeddingService,
    private _router: ActivatedRoute
  ) {
    this._router.params.subscribe((params) => {
      this.weddingService
        .getTitulo(params['titulo'])
        .subscribe((data: WeddingResponseDto) => {
          this.wedding = data;
          console.log(this.wedding);
        });
    });
  }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-11');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
}
