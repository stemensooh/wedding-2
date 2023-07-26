import { Component, OnInit } from '@angular/core';
import { CustomizerService } from 'src/app/shared/service/customizer.service';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  siteKey: string = environment.captcha.siteKey; // Reemplaza esto con tu clave del sitio
  formLogin!: FormGroup;

  constructor(
    public customize: CustomizerService,
    private reCaptchaV3Service: ReCaptchaV3Service,
    private fb: FormBuilder
  ) {
    this.customizeLayoutVersion('light');
  }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      recaptcha: ['', Validators.required],
    });
  }

  customizeLayoutVersion(val: any) {
    this.customize.setLayoutVersion(val);
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit() {
    // this.reCaptchaV3Service.execute(
    //   this.siteKey,
    //   'homepage',
    //   (token) => {
    //     console.log('This is your token: ', token);
    //   },
    //   {
    //     useGlobalDomain: false,
    //   }
    // );
    // this.reCaptchaV3Service.execute(
    //   this.siteKey,
    //   'homepage',
    //   (token) => {
    //     console.log('This is your token: ', token);
    //   },
    //   {
    //     useGlobalDomain: false,
    //   }
    // );
  }

  handleLoad() {
    console.log('handleLoad');
  }

  handleSuccess($event: any) {
    console.log('handleSuccess', $event);
  }

  handleReset() {
    console.log('handleReset');
  }

  handleExpire() {
    console.log('handleExpire');
  }

  handleReady() {
    console.log('handleReady');
  }
}
