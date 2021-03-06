
import { CommonModule } from '@angular/common';
import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { MoviePlayingComponent } from './movie-playing/movie-playing.component';
import { MovieComingsoonComponent } from './movie-comingsoon/movie-comingsoon.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';
import { NewsComponent } from './news/news.component';
import { ReviewMovieComponent } from './review-movie/review-movie.component';
import { BlogMovieComponent } from './blog-movie/blog-movie.component';
import { PromotionComponent } from './promotion/promotion.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { SlickModule } from 'ngx-slick';
import { MdbootstrapModule } from 'src/app/_core/common/shareModule/mdbootstrap/mdbootstrap.module';
import {  FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    HomepageLayoutComponent, 
    NavbarComponent, 
    SliderComponent, 
    MovieTypeComponent, 
    MoviePlayingComponent, 
    MovieComingsoonComponent, 
    MovieItemComponent, 
    QuickBookingComponent, 
    NewsComponent, 
    ReviewMovieComponent, 
    BlogMovieComponent, PromotionComponent, FooterComponent, SigninComponent, SignupComponent],
  
  imports: [
    CommonModule,SlickModule,MdbootstrapModule, FormsModule ,
    RouterModule
  ],
  exports: [
    HomepageLayoutComponent, 
    NavbarComponent, 
    SliderComponent, 
    MovieTypeComponent, 
    MoviePlayingComponent, 
    MovieComingsoonComponent, 
    MovieItemComponent, 
    QuickBookingComponent,
    NewsComponent, 
    ReviewMovieComponent, 
    BlogMovieComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent
  ]
})
export class HomepageModuleModule { }
