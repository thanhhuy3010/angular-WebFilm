import { Component, OnInit, OnDestroy } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailfilm-layout',
  templateUrl: './detailfilm-layout.component.html',
  styleUrls: ['./detailfilm-layout.component.scss']
})
export class DetailfilmLayoutComponent implements OnInit,OnDestroy {
  movie: Phim;
  nofti: string = '';
  subParams:Subscription;
  subServices: Subscription;
  
  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){

  }

}
