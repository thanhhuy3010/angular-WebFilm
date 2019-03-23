import { Component, OnInit } from '@angular/core';
import { userLogin } from 'src/app/_core/models/userLogin';
import { NguoidungService } from 'src/app/_core/services/nguoidung.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  subService: any;
 

  constructor(private nguoiDungService:NguoidungService,private authSV:AuthService) { }

  ngOnInit() {
    
  }

  DangNhap(data:userLogin){
    this.subService = this.nguoiDungService.DangNhap(data).subscribe((result)=>{
      console.log(result);
     if(typeof (result) =='object'){
      data.accessToken = result.accessToken;
       localStorage.setItem('userLogin',JSON.stringify(data));
       Swal.fire('Thông báo','Đăng nhập thành công','success');
      this.authSV.DangNhap();
      // reload
     }else{
       Swal.fire('Thông báo',result,'error');
     }

   })
  }
}
