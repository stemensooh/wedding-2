import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';
import { ProfileService } from 'src/app/core/services/profile.service';
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
    private profileService: ProfileService
  ) {
    this.route.params.subscribe((params) => {
      const titulo = params['titulo'];

      this.weddingService
        .getTitulo(titulo)
        .subscribe((data: WeddingResponseDto) => {
          this.wedding = data;
          // console.log(this.wedding);
        });

        this.profileService.crearHistory(titulo).subscribe(data => {
          // console.log(data);
        })
    });

    
  }

  ngOnInit() {
    this.colorPicker.setColorScheme('color-11');
    this.title.setTitle(this.route.snapshot.data['title']);
  }
}
