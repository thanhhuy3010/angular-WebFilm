import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'app-movie-playing',
  templateUrl: './movie-playing.component.html',
  styleUrls: ['./movie-playing.component.scss']
})
export class MoviePlayingComponent implements OnInit ,AfterViewInit {

  constructor(private elementRef: ElementRef) {
    
   }

  ngOnInit() {
    
  }

  ngAfterViewInit () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  
 
 
  

}
