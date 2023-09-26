import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { authGuard } from '../core/guards/auth.guard';
import { ProfileViewHistoryComponent } from './profile-view-history/profile-view-history.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      title: 'profile',
    },
  },
  {
    path: 'history/:titulo',
    component: ProfileViewHistoryComponent,
    data: {
      title: 'history',
    },
  },
  // {
  //   path: ':titulo',
  //   component: ProfileComponent,
  //   data: {
  //     title: 'profile',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
