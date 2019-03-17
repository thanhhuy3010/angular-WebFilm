import { NgModule,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { TicketRoomComponent } from './ticket-room/ticket-room.component';
import {Routes,RouterModule} from '@angular/router';

const adminRoute:Routes = [
  {path:'admin', component:AdminTemplateComponent,children:[
    {path:'',component:QuanLyNguoiDungComponent},
    {path:'quanlynguoidung',component:QuanLyNguoiDungComponent},
    {path:'ticketmanageroom',component:TicketRoomComponent}
  ]}

]

@NgModule({
  declarations: [AdminTemplateComponent, QuanLyNguoiDungComponent, TicketRoomComponent],
  imports: [
    CommonModule,RouterModule.forChild(adminRoute)
  ]
})
export class AdminModule { }
