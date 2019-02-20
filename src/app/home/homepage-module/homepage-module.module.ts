import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { MoviePlayingComponent } from './movie-playing/movie-playing.component';
import { MovieComingsoonComponent } from './movie-comingsoon/movie-comingsoon.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { QuickBookingComponent } from './quick-booking/quick-booking.component';

@NgModule({
  declarations: [HomepageLayoutComponent, NavbarComponent, SliderComponent, MovieTypeComponent, MoviePlayingComponent, MovieComingsoonComponent, MovieItemComponent, QuickBookingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageLayoutComponent, NavbarComponent, SliderComponent, MovieTypeComponent, MoviePlayingComponent, MovieComingsoonComponent, MovieItemComponent, QuickBookingComponent
  ]
})
export class HomepageModuleModule { }
