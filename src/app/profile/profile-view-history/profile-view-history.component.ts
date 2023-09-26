import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewHistoryResponse } from 'src/app/core/dtos/view-history-response.dto';
import { UsuarioToken } from 'src/app/core/interfaces/usuario-token.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { WeddingService } from 'src/app/core/services/wedding.service';

@Component({
  selector: 'app-profile-view-history',
  templateUrl: './profile-view-history.component.html',
  styleUrls: ['./profile-view-history.component.scss'],
})
export class ProfileViewHistoryComponent {
  usuarioToken?: UsuarioToken;
  tituloPagina: string | undefined = '';
  items: ViewHistoryResponse[] = [];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private weddingService: WeddingService,
    private profileService: ProfileService
  ) {
    this.usuarioToken = this.authService.getAuthToken();

    this.route.params.subscribe((params) => {
      this.tituloPagina = params['titulo'];
      this.profileService.getHistory(this.tituloPagina ?? '').subscribe((data) => {
        this.items = data;
        console.log('getHistory', this.items);
      });
    });
  }

  cerrarSesion() {
    this.authService.signOut();
    this.router.navigate(['/auth/sign-in']);
  }
}
