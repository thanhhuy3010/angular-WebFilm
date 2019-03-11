import { Component, OnInit } from '@angular/core';


import $ from 'jquery';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  
  constructor() {
   
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".navbar-toggler, .overlay").on("click",function(){
        $(".mobileMenu, .overlay" ).toggleClass("open");
      })
    });
    
    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $('.navbar').addClass('header-scroll')
      }
      else{
          $('.navbar').removeClass('header-scroll')
      }
    })

  }

  toggle_div() {
    var ele = document.getElementById('sidebar');
    ele.classList.toggle('active');
  };
  
 


}
