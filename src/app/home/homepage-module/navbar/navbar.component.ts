import { Component, OnInit } from '@angular/core';


import $ from 'jquery';
import { AuthService } from 'src/app/_core/services/auth.service';
import { userLogin } from 'src/app/_core/models/userLogin';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  uslogin:any = userLogin;
  checkLogin: boolean = false;
  constructor(private authSV: AuthService) {
   
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
    this.authSV.KiemTraDangNgap();
    if(this.authSV.checkLoginUser == false){
      this.checkLogin = false;
    } else{
      this.checkLogin = true;
    }
    
  }

  toggle_div() {
    var ele = document.getElementById('sidebar');
    ele.classList.toggle('active');
  };
  
 


}
