import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {

  
  constructor(private atvRoute:ActivatedRoute) { }
  

  ngOnInit() {
   
  }

 

}