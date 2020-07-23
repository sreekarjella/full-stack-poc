import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFunctionalityRoutingModule } from './customer-functionality-routing.module';
import { CustomerOptionsComponent } from './components/customer-options/customer-options.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerOptionsComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    CustomerFunctionalityRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerOptionsComponent,
    RegistrationFormComponent
  ]
})
export class CustomerFunctionalityModule { }
