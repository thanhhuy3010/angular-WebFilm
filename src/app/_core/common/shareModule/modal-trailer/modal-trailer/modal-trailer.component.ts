import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';



@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  public phim:any = {};

  // urlCache = new Map<string, SafeResourceUrl>();

  constructor (private qlPhimService:MovieService){

  }
 

  // safeSrc: SafeResourceUrl;
  // constructor(private sanitizer: DomSanitizer) { 
  //   this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
  // }

  ngOnInit() {
    //subcribe store phim
    this.qlPhimService.trailerModalPhim.subscribe((phim:any)=>{
      this.phim = phim;
    })
  }

  // getId(url) {
  //   let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  //   let match = url.match(regExp);

  //   if (match && match[2].length == 11) {
  //       return match[2];
  //   } else {
  //       return 'error';
  //   }
  // }
  
  // getIframeYouTubeUrl(videoId: string): SafeResourceUrl {
  //   let url = this.urlCache.get(videoId);
  //   if (!url) {
  //     url = this.domSanitizer.bypassSecurityTrustResourceUrl(
  //       "https://www.youtube.com/embed/" + videoId);;
  //     this.urlCache.set(videoId, url);
  //   }
  //   return url;
  // }

 
  
}
