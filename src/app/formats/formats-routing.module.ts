import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatsDetailComponent } from './formats-detail/formats-detail.component';
import { FormatsListComponent } from './formats-list/formats-list.component';

const routes: Routes = [
  {
    path: '',
    component: FormatsListComponent
  },
  {
    path: 'detail',
    component: FormatsDetailComponent
  },
  {
    path: ':id',
    component: FormatsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsPageRoutingModule {}
