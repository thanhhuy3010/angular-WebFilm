import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageModuleModule } from './homepage-module/homepage-module.module';
import { DetailfilmModuleModule } from './detailfilm-module/detailfilm-module.module';
import { TicketBookingModuleModule } from './ticket-booking-module/ticket-booking-module.module';
import { HomepageLayoutComponent } from './homepage-module/homepage-layout/homepage-layout.component';
import { DetailfilmLayoutComponent } from './detailfilm-module/detailfilm-layout/detailfilm-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TicketBookingLayoutComponent } from './ticket-booking-module/ticket-booking-layout/ticket-booking-layout.component';


const homeRoutes:Routes =[
    {path:'',component:HomeLayoutComponent,children:[
      {path:'',component:HomepageLayoutComponent},
      {path:'trangchu',component:HomepageLayoutComponent},
      {path:'chitietphim',component:DetailfilmLayoutComponent},
      {path:'datve',component:TicketBookingLayoutComponent},
    ]
    }
   
  
    
  
  

]

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    HomepageModuleModule,
    DetailfilmModuleModule,
    TicketBookingModuleModule,
    
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    HomepageLayoutComponent,
    DetailfilmLayoutComponent,
    HomeLayoutComponent
  ]
  
})
export class HomeModule { }
