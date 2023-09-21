import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';
import { WeddingInvitacionComponent } from './wedding/wedding-invitacion/wedding-invitacion.component';

const routes: Routes = [
  {
    path: ':titulo',
    component: WeddingComponent,
    data: {
      title: 'Wedding',
    },
  },
  {
    path: ':titulo/invitacion',
    component: WeddingInvitacionComponent,
    data: {
      title: 'invitación',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutsRoutingModule {}
