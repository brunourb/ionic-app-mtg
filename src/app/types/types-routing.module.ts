import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesDetailComponent } from './types-detail/types-detail.component';
import { TypesListComponent } from './types-list/types-list.component';

const routes: Routes = [
  {
    path: '',
    component: TypesListComponent
  },
  {
    path: 'detail',
    component: TypesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesPageRoutingModule {}
