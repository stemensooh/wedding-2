import { Component } from '@angular/core';
import { CustomizerService } from '../shared/service/customizer.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(public customize: CustomizerService) {
    this.customizeLayoutVersion('light');
  }

  customizeLayoutVersion(val: any) {
    this.customize.setLayoutVersion(val);
  }
}
