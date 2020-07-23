import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminFunctionalityModule } from './admin-functionality/admin-functionality.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AdminPageRoutingModule,
    AdminFunctionalityModule
  ],
  declarations: [
    AdminPage,
    DashboardComponent
  ]
})
export class AdminPageModule {}
