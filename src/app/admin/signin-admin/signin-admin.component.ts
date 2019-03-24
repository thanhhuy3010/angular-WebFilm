import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDung } from 'src/app/_core/models/nguoiDung';
import { NguoidungService } from 'src/app/_core/services/nguoidung.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-signin-admin',
  templateUrl: './signin-admin.component.html',
  styleUrls: ['./signin-admin.component.scss']
})
export class SigninAdminComponent implements OnInit {
  @ViewChild("formDangNhap") formDN: NgForm;
  DangNhap(value: NguoiDung) {
    value.MaLoaiNguoiDung = "QuanTri";
    this.nguoiDungSV.LoginNguoiDung(value).subscribe((kq: any) => {
      if (value.MaLoaiNguoiDung == kq.MaLoaiNguoiDung) {
        if (typeof (kq) == "object") {
          localStorage.setItem('AdminDangNhap', JSON.stringify(kq));
          this.auth.LoginAdmin();
          this.router.navigate(['admin/mainAd']);
        } else {
          alert('tài khoản hoặc mật khẩu không đúng !')
        }
      } else {
        this.router.navigate(['adminLog']);
      }
    }, error => {
      console.log(error);
    });
  }
  constructor(private nguoiDungSV: NguoidungService, private router: Router, private auth:AuthService ) { }


  ngOnInit() {
  }

}
