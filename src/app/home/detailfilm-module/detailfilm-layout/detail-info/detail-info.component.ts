import { Component, OnInit,OnDestroy } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/_core/services/movie.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit,OnDestroy {

  
  constructor(private atvRoute:ActivatedRoute) { }
  

  ngOnInit() {
   
  }

  ngOnDestroy(){
    
  }
 

}