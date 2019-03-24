import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungService } from 'src/app/_core/services/nguoidung.service';
import * as $ from 'jquery';
import swal from 'sweetalert2';
import { NguoiDung } from 'src/app/_core/models/nguoiDung';
declare var $: any;

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss']
})
export class QuanLyNguoiDungComponent implements OnInit {
  @ViewChild("formDangKy") formDK: NgForm;
  @ViewChild("formCapNhat") formCN: NgForm;
  mangNguoiDung: any[] = [];
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  LayDSND() {
    this.nguoiDungSV.LayDanhSachNguoiDung().subscribe(
      (kq: any) => {
        this.mangNguoiDung = kq;
        console.log(kq);
        
      },
      error => {
        console.log(error);
      }
    );
  }
  DangKy(value: NguoiDung) {
    value.MaNhom = "GP01";
    this.nguoiDungSV.DangKy(value).subscribe(
      (kq: any) => {
        if (typeof (kq) == "object") {
          //console.log(kq)
          this.mangNguoiDung.unshift(value);
          this.formDK.reset();
          swal.fire({
            type: 'success',
            title: 'Thêm thành công',
            showConfirmButton: false,
            timer: 2000
          })
          $('#btnDongForm').trigger('click');
        } else {
          swal.fire('Tài khoản hoặc mật khẩu đã tồn tại !')
          this.formDK.reset();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  Sua(thamso) {
    let taikhoan = thamso.getAttribute("data-taiKhoan");
    let matkhau = thamso.getAttribute("data-matKhau");
    let hoten = thamso.getAttribute("data-hoTen");
    let email = thamso.getAttribute("data-email");
    let sodt = thamso.getAttribute("data-soDT");
    let maloainguoidung = thamso.getAttribute("data-maLoaiNguoiDung");
    this.formCN.setValue({
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
      HoTen: hoten,
      Email: email,
      SoDT: sodt,
      MaLoaiNguoiDung: maloainguoidung,
    })

  }
  CapNhat(value: NguoiDung) {
    value.MaNhom = "GP03";
    this.nguoiDungSV.CapNhat(value).subscribe(
      (kq: any) => {
        //console.log(kq)
        this.LayDSND();
        this.formCN.reset();
        swal.fire({
          type: 'success',
          title: 'Cập nhật thành công',
          showConfirmButton: false,
          timer: 2000
        })
        $('#btnDongformCN').trigger('click');
      },
      error => {
        console.log(error);
      }
    );
  }
  XoaNguoiDung(value) {
    swal.fire({
      title: 'Bạn có chắc?',
      text: "bạn muốn xóa người dùng này!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Đã Xóa!',
          'Bạn xóa thành công người dùng này.',
          'success'
        )
        this.nguoiDungSV.XoaNguoiDung(value).subscribe(
          (kq: any) => {
            console.log(kq);
            
            this.LayDSND();
          }
        )
      }
    })
  }
  constructor(private nguoiDungSV: NguoidungService) { }

  ngOnInit() {
    setTimeout(() => {
      this.LayDSND();
    }, 500);

    $('#btnDong').click(function () {
      {
        $('#btnDongForm').trigger('click');
      }
    });
  }

}
