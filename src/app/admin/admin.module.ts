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
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginBaoveService } from '../_core/services/login-baove.service';

const adminRoute:Routes = [
  {
    path : "adminLog",component:SigninAdminComponent
  },
  {path:'admin', component:AdminTemplateComponent, canActivate:[LoginBaoveService], children:[
    {path:'mainAd', component:AdminHomeComponent},
    {path:'quanlynguoidung',component:QuanLyNguoiDungComponent},
    {path:'quanlyphim',component:QuanLyPhimComponent},
    {path : 'adminLog',component:SigninAdminComponent}
  ]}

]

@NgModule({
  declarations: [AdminTemplateComponent, QuanLyNguoiDungComponent, TicketRoomComponent, QuanLyPhimComponent, SigninAdminComponent, QuanLyTinTucComponent,AdminHomeComponent],
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
    SigninAdminComponent,
    AdminHomeComponent

  ]
})
export class AdminModule { }
