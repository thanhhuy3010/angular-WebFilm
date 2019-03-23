import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Phim } from 'src/app/_core/models/movie';
import { MovieService } from 'src/app/_core/services/movie.service';
import swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {

  @ViewChild("formAddFilm") formAddFilm: NgForm;
  @ViewChild("formUpdateFilm") formUpdateFilm: NgForm;
  mangPhim: string[] = [];
  reverse: boolean = false;
  key: string = 'name';
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
    )
  }
  AddNewFilm(value: Phim, HinhAnh) {
    value.MaNhom = "GP01";
    value.HinhAnh = HinhAnh[0].name;
    this.PhimSV.ThemPhim(value).subscribe((kq) => {
      if (typeof (kq) == "object") {
        this.PhimSV.ThemHinhAnh(HinhAnh[0], value.TenPhim).subscribe((kqHinhAnh) => {
          console.log(kqHinhAnh);

        }
        )
        setTimeout(() => {

          swal.fire({
            type: 'success',
            title: 'Thêm Thành Công !',
            showConfirmButton: false,
            timer: 2000
          })
          this.LayDSFilm();
          this.formAddFilm.reset();
          $('#btnDongFormAF').trigger('click');
        }, 500)


      } else {
        swal.fire('Phim tồn tại ! Lỗi')
        this.formAddFilm.reset();
      }
    }
      , (error) => {
        console.log(error);

      }
    )


  }
  constructor(private PhimSV: MovieService) { }

  ngOnInit() {
    setTimeout(() => {
      this.LayDSFilm();
    }, 500);
  }

}
