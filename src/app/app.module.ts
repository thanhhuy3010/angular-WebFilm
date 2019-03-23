import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';
import { ModalTrailerModule } from './_core/common/shareModule/modal-trailer/modal-trailer.module';
import { AdminModule } from './admin/admin.module';

const appRoutes:Routes = [
  {path:'',loadChildren:'./home/home.module#HomeModule'},
  {path:'home',loadChildren:'./home/home.module#HomeModule'},
  // {path:'admin',loadChildren:'./admin/admin.module#AdminModule'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HomeModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ModalTrailerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
