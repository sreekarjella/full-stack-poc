import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminFunctionalityRoutingModule } from './admin-functionality-routing.module';
import { RequestComponent } from './components/request/request.component';
import { IonicModule } from '@ionic/angular';
import { DocumentValidationComponent } from './components/document-validation/document-validation.component';
import { AccountCreationComponent } from './components/account-creation/account-creation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestComponent,
    DocumentValidationComponent,
    AccountCreationComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AdminFunctionalityRoutingModule,
    FormsModule
  ]
})
export class AdminFunctionalityModule { }
