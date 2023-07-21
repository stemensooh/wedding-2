import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
    data: {
      breadcrumb: "Wedding"
    }
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    data: {
      breadcrumb: "auth"
    }
  },
  {
    path: 'profile',
    component: AuthComponent,
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    data: {
      breadcrumb: "auth"
    }
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
