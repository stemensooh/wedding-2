import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    data: {
      title: "Wedding | Unice Landing Page"
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
