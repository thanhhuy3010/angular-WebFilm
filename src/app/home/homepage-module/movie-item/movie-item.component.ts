import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() phim:Phim = new Phim;
  
  constructor() { }

  ngOnInit() {
  }

}
