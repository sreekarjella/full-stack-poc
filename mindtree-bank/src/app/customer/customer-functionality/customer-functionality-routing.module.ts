import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { CustomerOptionsComponent } from './components/customer-options/customer-options.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFunctionalityRoutingModule { }
