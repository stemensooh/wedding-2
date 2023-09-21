import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGE_1921_x_1100 } from 'src/app/core/constants/images';
import { WeddingResponseDto } from 'src/app/core/dtos/wedding-response.dto';
import { WeddingService } from 'src/app/core/services/wedding.service';

@Component({
  selector: 'app-wedding-invitacion',
  templateUrl: './wedding-invitacion.component.html',
  styleUrls: ['./wedding-invitacion.component.scss'],
})
export class WeddingInvitacionComponent {
  IMAGE = IMAGE_1921_x_1100;

  constructor(
    private _router: ActivatedRoute,
    private service: WeddingService
  ) {
    this._router.params.subscribe((params) => {
      this.service
        .getInvitacion(params['titulo'])
        .subscribe((data: WeddingResponseDto) => {
          this.IMAGE = data.invitacion ?? '';
          console.log('getInvitacion', data);
        });
    });
  }
}
