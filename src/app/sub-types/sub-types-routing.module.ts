import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubTypesDetailComponent } from './sub-types-detail/sub-types-detail.component';
import { SubTypesListComponent } from './sub-types-list/sub-types-list.component';

const routes: Routes = [
  {
    path: '',
    component: SubTypesListComponent
  },
  {
    path: 'detail',
    component: SubTypesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubTypesPageRoutingModule {}
