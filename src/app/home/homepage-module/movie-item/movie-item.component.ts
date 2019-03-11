import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';
import $ from 'jquery';
import { MovieService } from 'src/app/_core/services/movie.service';
declare var $:any;
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit   {
 

  @Input() phim:Phim = new Phim;
  
  constructor(private qlPhimService:MovieService) { }

  ngOnInit() {
    
  }

 

  
}
