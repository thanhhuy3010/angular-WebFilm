import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModuleModule } from './homepage-module/homepage-module.module';
import { DetailfilmModuleModule } from './detailfilm-module/detailfilm-module.module';
import { TicketBookingModuleModule } from './ticket-booking-module/ticket-booking-module.module';
import { HomepageLayoutComponent } from './homepage-module/homepage-layout/homepage-layout.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModuleModule,
    DetailfilmModuleModule,
    TicketBookingModuleModule
  ],
  exports: [
    HomepageLayoutComponent
  ]
  
})
export class HomeModule { }
