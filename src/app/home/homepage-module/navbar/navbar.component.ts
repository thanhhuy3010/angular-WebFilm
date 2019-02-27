import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  elegantForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.elegantForm = fb.group({
      elegantFormEmailEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['', Validators.required],
    });
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".navbar-toggler, .overlay").on("click",function(){
        $(".mobileMenu, .overlay" ).toggleClass("open");
      })
    });
    
    $(window).scroll(function(){
      if($(window).scrollTop() > $('#carouselId').position().top){
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
