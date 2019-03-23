import { NgModule,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { TicketRoomComponent } from './ticket-room/ticket-room.component';
import {Routes,RouterModule} from '@angular/router';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { SigninAdminComponent } from './signin-admin/signin-admin.component';
import { FormsModule } from '@angular/forms';
import { QuanLyTinTucComponent } from './quan-ly-tin-tuc/quan-ly-tin-tuc.component';

const adminRoute:Routes = [
  {path:'admin', component:SigninAdminComponent,children:[
    {path:'adminMain', component:AdminTemplateComponent},
    {path:'quanlynguoidung',component:QuanLyNguoiDungComponent},
    {path:'ticketmanageroom',component:TicketRoomComponent}
  ]}

]

@NgModule({
  declarations: [AdminTemplateComponent, QuanLyNguoiDungComponent, TicketRoomComponent, QuanLyPhimComponent, SigninAdminComponent, QuanLyTinTucComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoute),
    FormsModule,


  ],
  exports: [
    AdminTemplateComponent, 
    QuanLyNguoiDungComponent, 
    TicketRoomComponent, 
    QuanLyPhimComponent, 
    QuanLyTinTucComponent,
    SigninAdminComponent

  ]
})
export class AdminModule { }
