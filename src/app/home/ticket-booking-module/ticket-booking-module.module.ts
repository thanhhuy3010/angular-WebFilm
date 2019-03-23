import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingLayoutComponent } from './ticket-booking-layout/ticket-booking-layout.component';
import { GheComponent } from './ghe/ghe.component';
import { EditGheComponent } from './edit-ghe/edit-ghe.component';

@NgModule({
  declarations: [TicketBookingLayoutComponent, GheComponent, EditGheComponent],
  imports: [
    CommonModule

  ],
  exports:[
    TicketBookingLayoutComponent,GheComponent, EditGheComponent
  ]
})
export class TicketBookingModuleModule { }
