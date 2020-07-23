import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerPage } from './customer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  },
  {
    path: 'upload',
    loadChildren: () => import('./customer-functionality/customer-functionality.module').then( m => m.CustomerFunctionalityModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {}
