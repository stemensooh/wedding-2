import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'wedding',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
    data: {
      breadcrumb: "Blog"
    }
  },
  {
    path: '',
    redirectTo: 'wedding',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
