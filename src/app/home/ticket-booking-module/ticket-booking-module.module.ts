import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingLayoutComponent } from './ticket-booking-layout/ticket-booking-layout.component';

@NgModule({
  declarations: [TicketBookingLayoutComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TicketBookingLayoutComponent
  ]
})
export class TicketBookingModuleModule { }
