import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCaptchaModule } from 'ngx-captcha';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule, RecaptchaV3Module } from 'ng-recaptcha';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthControlService } from './auth-control.service';
import { AuthService } from '../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // BrowserModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // SocialLoginModule,
    FormsModule,
    // NgxCaptchaModule,
    RecaptchaModule,
    RecaptchaV3Module,
    SharedModule
  ],
  providers: [
    AuthControlService,
    AuthService,
    HttpClientModule,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.clientId
            )
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.captcha.siteKey,
    }
  ],
})
export class AuthModule {}
