import { Component, OnInit, OnDestroy } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/_core/services/movie.service';
@Component({
  selector: 'app-detailfilm-layout',
  templateUrl: './detailfilm-layout.component.html',
  styleUrls: ['./detailfilm-layout.component.scss']
})
export class DetailfilmLayoutComponent implements OnInit,OnDestroy {
  phim: Phim = new Phim();
  
  nofti: string = '';
  subParams:Subscription;
  subServices: Subscription;
  
  constructor(private atvRoute: ActivatedRoute, private phimService : MovieService) { }

  ngOnInit() {
    this.subParams = this.atvRoute.queryParams.subscribe((thamso: any) => {
      this.subServices = this.LayChiTietPhim(thamso.MaPhim); //Lấy giá trị tham số gọi service load nội dung phim
    });
  }
  
  LayChiTietPhim(maPhim:string){
    return this.phimService.LayChiTietPhim(maPhim).subscribe((ketqua:any)=> {
      if(typeof(ketqua) === 'object')
      {
        this.phim =ketqua;
        console.log();
        
      }else{
        this.nofti = ketqua;

      }
    },(error) => {
        console.log(error);
        
    })
  }
  ngOnDestroy(){
    this.subParams.unsubscribe();
    this.subServices.unsubscribe();

  }

}
