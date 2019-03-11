import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() phim:Phim = new Phim;
  constructor() { }

  ngOnInit() {
  }

}
