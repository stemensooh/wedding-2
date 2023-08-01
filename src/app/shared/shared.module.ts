import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { BreadcrumbComponent } from './components/pages/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CenterMenuComponent } from './components/navigation/center-menu/center-menu.component';
import { ToastrModule } from 'ngx-toastr';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdBootstrapModule } from './md-bootstrap/md-bootstrap.module';

@NgModule({
  declarations: [MenuComponent, TapToTopComponent,HeaderComponent,BreadcrumbComponent,FooterComponent, CenterMenuComponent, OrderByPipe, LoaderComponent],
  exports:[
    MenuComponent,
    LoaderComponent,
    CenterMenuComponent,
    TapToTopComponent,
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    OrderByPipe,
    MdBootstrapModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    MdBootstrapModule
  ]
})
export class SharedModule { }
