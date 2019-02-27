import { Component, OnInit,  ElementRef } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/_core/services/movie.service';


@Component({
  selector: 'app-movie-comingsoon',
  templateUrl: './movie-comingsoon.component.html',
  styleUrls: ['./movie-comingsoon.component.scss']
})

export class MovieComingsoonComponent implements OnInit  {

  dsPhim:Phim[] = [];
  subServiceLayDanhSachPhim:Subscription;

  constructor(private elementRef: ElementRef, private movieService:MovieService) {
    
   }

  ngOnInit() {
    //Lấy dữ liệu phim từ service gán vào thuộc tính dsPhim => binding lên giao diện
    // this.dsPhim = this.phimService.LayDanhSachPhim();
    this.subServiceLayDanhSachPhim = this.movieService.LayDanhSachPhim().subscribe((mangPhim:Phim[])=>{
      this.dsPhim = mangPhim;
      console.log(this.dsPhim);
      
    })
  }

  slideConfig_1 = {
    "slidesToShow": 4, 
    "slidesToScroll": 4,
    "dots": false,
    "infinite": false,
    adaptiveHeight: true,
    arrows : true,
    // <i class="fa fa-arrow-right slick_next"></i>
    nextArrow: '<i class="fa fa-chevron-right slick_next"></i>',
    prevArrow: '<i class="fa fa-chevron-left slick_prev"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
      }
    ]
  };
  
  
 
 
  

}
