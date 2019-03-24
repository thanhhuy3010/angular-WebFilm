import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Phim } from "src/app/_core/models/movie";
import { MovieService } from "src/app/_core/services/movie.service";
import swal from "sweetalert2";
import * as $ from "jquery";

@Component({
  selector: "app-quan-ly-phim",
  templateUrl: "./quan-ly-phim.component.html",
  styleUrls: ["./quan-ly-phim.component.scss"]
})
export class QuanLyPhimComponent implements OnInit {
  @ViewChild("formAddFilm") formAddFilm: NgForm;
  @ViewChild("formUpdateFilm") formUpdateFilm: NgForm;
  mangPhim: string[] = [];
  reverse: boolean = false;
  key: string = "name";
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  LayDSFilm() {
    this.PhimSV.LayDanhSachPhim().subscribe(
      (kq: any) => {
        this.mangPhim = kq;
      },
      error => {
        console.log(error);
      }
    );
  }
  AddNewFilm(value: Phim, HinhAnh) {
    value.MaNhom = "GP01";
    value.HinhAnh = HinhAnh[0].name;
    this.PhimSV.ThemPhim(value).subscribe(
      kq => {
        if (typeof kq == "object") {
          this.PhimSV.ThemHinhAnh(HinhAnh[0], value.TenPhim).subscribe(
            kqHinhAnh => {
              console.log(kqHinhAnh);
            }
          );
          setTimeout(() => {
            swal.fire({
              type: "success",
              title: "Thêm Thành Công !",
              showConfirmButton: false,
              timer: 2000
            });
            this.LayDSFilm();
            this.formAddFilm.reset();
            $("#btnDongFormAF").trigger("click");
          }, 500);
        } else {
          swal.fire("Phim tồn tại ! Lỗi");
          this.formAddFilm.reset();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  EditFilm(variables) {
    let maPhim = variables.getAttribute("data-maPhim");
    let tenPhim = variables.getAttribute("data-tenPhim");
    let moTa = variables.getAttribute("data-moTa");
    let trailer = variables.getAttribute("data-Trailer");
    let ngayKhoiChieu = variables.getAttribute("data-ngayKhoiChieu");
    let danhGia = variables.getAttribute("data-danhGia");
    this.formUpdateFilm.setValue({
      MaPhim: maPhim,
      TenPhim: tenPhim,
      MoTa: moTa,
      Trailer: trailer,
      ngayKhoiChieu: ngayKhoiChieu,
      DanhGia: danhGia
    });
  }
  UpdateFilm(value: Phim, HinhAnh) {
    if (HinhAnh.length == 0) {
      swal.fire("Vui lòng chọn lại hình ảnh!");
    } else {
      value.MaNhom = "GP01";
      value.HinhAnh = HinhAnh[0].name;
      this.PhimSV.CapNhatPhim(value).subscribe(kq => {
        this.PhimSV.ThemHinhAnh(HinhAnh[0], value.TenPhim).subscribe(
          kqThemHinhAnh => {
            console.log(kqThemHinhAnh);
          }
        );
        swal.fire({
          type: "success",
          title: "Cập nhật thành công!",
          showConfirmButton: false,
          timer: 1000
        });
        this.LayDSFilm();
        this.formUpdateFilm;
        $("#btnDongformCNP").trigger("click");
        err => {
          console.log(err);
        };
      });
    }
  }
  DelFilm(value) {
    swal.fire({
      title: 'Cảnh báo!',
      text: 'Bạn thật sự muốn xóa phim này ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vâng! Tôi muốn xóa'
    }).then((result) => {
      if (result.value) {
        this.PhimSV.XoaPhim(value).subscribe(
          (kq: any) => {
            console.log(kq);
            this.LayDSFilm();
          }
        );
        swal.fire(
          'Đã Xóa!',
          'Bạn xóa thành công phim này.',
          'success'
        )
      }
    })
  }
  constructor(private PhimSV: MovieService) { }

  ngOnInit() {
    setTimeout(() => {
      this.LayDSFilm();
    }, 700);
  }
}
