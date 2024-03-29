import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetsDetailComponent } from './sets-detail/sets-detail.component';
import { SetsListComponent } from './sets-list/sets-list.component';

const routes: Routes = [
  {
    path: '',
    component: SetsListComponent
  },
  {
    path: 'detail',
    component: SetsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetsPageRoutingModule {}
