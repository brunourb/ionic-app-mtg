import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { CardsListComponent } from './cards-list/cards-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardsListComponent
  },
  {
    path: ':id',
    component: CardsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
