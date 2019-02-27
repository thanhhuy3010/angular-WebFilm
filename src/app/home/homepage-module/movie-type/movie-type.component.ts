import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.scss']
})
export class MovieTypeComponent implements OnInit {

  playingStatus:boolean = true;

  constructor() { }

  showPlaying(){
    this.playingStatus=true;
  }
  showCommingSoon(){
    this.playingStatus=false;
  }
  ngOnInit() {
  }

}
