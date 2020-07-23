import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './components/request/request.component';
import { IonicModule } from '@ionic/angular';
import { AccountCreationComponent } from './components/account-creation/account-creation.component';


const routes: Routes = [
  {
    path: '',
    component: RequestComponent
  },
  {
    path: 'account-creation',
    component: AccountCreationComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    IonicModule
  ],
  exports: [RouterModule]
})
export class AdminFunctionalityRoutingModule { }
