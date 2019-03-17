import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from 'src/app/_core/services/nguoidung.service';
import { NguoiDung } from 'src/app/_core/models/nguoiDung';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,OnDestroy {

  @ViewChild("formDangKy") formDangKy:NgForm;

  dsNguoiDung:NguoiDung[] = [];
  subServiceLayDanhSachNguoiDung:Subscription;
  subService: Subscription;
  
  constructor(private nguoiDungSer:NguoidungService) { }

  ngOnInit() {
    this.subServiceLayDanhSachNguoiDung = this.nguoiDungSer.LayDanhSachNguoiDung()
    .subscribe((mangNguoiDung:NguoiDung[])=>{
    this.dsNguoiDung = mangNguoiDung;
    console.log(this.dsNguoiDung);
    
    })
  }


  DangKy(thongTinNguoiDung:NguoiDung){
    thongTinNguoiDung.MaNhom="GP01";
    thongTinNguoiDung.MaLoaiNguoiDung="KhachHang";
    this.subService = this.nguoiDungSer.DangKy(thongTinNguoiDung).subscribe((result)=>{
      console.log(result);
      
      if(typeof(result) =='object'){
        alert('Thành công');
      }
      else{
        alert('Thất bại');
      }
    })
    this.formDangKy.reset();
    console.log(thongTinNguoiDung);
    
  }
  
  kiemTraMatKhau(cmatKhau:string,matKhau:string){
    if(cmatKhau!=matKhau){
      this.formDangKy.control.setErrors({'loiMatKhau':true});
      return true;
    }
    this.formDangKy.control.setErrors({'loiMatKhau':false});
    return false;
  }
  ngOnDestroy():void{
    if(this.subService)
    {
      this.subService.unsubscribe();
    }
  }

}
