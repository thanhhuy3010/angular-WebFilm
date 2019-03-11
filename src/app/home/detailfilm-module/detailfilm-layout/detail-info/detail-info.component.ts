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

  movie: Phim;
  nofti:string = '';
  subParam: Subscription;
  subService: Subscription;
  
  
  constructor(private atvRout: ActivatedRoute ,private movieService: MovieService, private title: Title) { }

  ngOnInit() {
    this.subParam = this.atvRout.queryParams.subscribe((index: any)=> {
      this.subService = this.getDetailFilm(index.MaPhim);
      this.title.setTitle(index.TenPhim)
      
    })
  }

  getDetailFilm(filmID:string){
    return this.movieService.getDetailFilm(filmID).subscribe((result:any)=>{
      if(typeof (result) === 'object'){
        this.movie = result;
      }else {
        this.nofti = result;
      }
    }, (error) => {
      console.log(error);
      alert(error);
    }
    )
  }

  ngOnDestroy(){
    this.subParam.unsubscribe();
    this.subService.unsubscribe();
  }

}
