import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe:any = {};
  dangDat: boolean = false;


  constructor() { }

  ngOnInit() {

  }
  DatGhe(){
    this.dangDat = !this.dangDat;
  }

}
