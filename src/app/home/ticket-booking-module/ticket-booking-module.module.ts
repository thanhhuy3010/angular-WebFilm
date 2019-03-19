import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingLayoutComponent } from './ticket-booking-layout/ticket-booking-layout.component';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { EditGheComponent } from './edit-ghe/edit-ghe.component';

@NgModule({
  declarations: [TicketBookingLayoutComponent, GheComponent, DanhSachGheComponent, EditGheComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TicketBookingLayoutComponent,GheComponent, DanhSachGheComponent, EditGheComponent
  ]
})
export class TicketBookingModuleModule { }
