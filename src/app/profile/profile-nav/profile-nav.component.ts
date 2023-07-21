import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomizerService } from 'src/app/shared/service/customizer.service';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss'],
})
export class ProfileNavComponent {
  @Input() form!: FormGroup;

  constructor(
    public customize: CustomizerService,
    private router: Router,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.customizeLayoutVersion('light');
  }

  customizeLayoutVersion(val: any) {
    this.customize.setLayoutVersion(val);
  }

  customizeLayoutType(val: any) {
    this.customize.setLayoutType(val);
  }
}
