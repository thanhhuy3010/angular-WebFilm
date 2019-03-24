import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phim } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  @Output() trailerModalPhim = new EventEmitter;
  
  constructor(private http:HttpClient) { 

  }

  LayDanhSachPhim():Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
    let observable:any = this.http.get(api);
    return observable;
  }

  LayChiTietPhim(maPhim:string):Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let observable:any= this.http.get(api);
    return observable;// observable chứa dữ liệu từ sever trả về 
  }

  LayThongTinPhongVe(maLichChieu:number):Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaPhim=${maLichChieu}`;
    let observable:any= this.http.get(api);
    return observable;// observable chứa dữ liệu từ sever trả về 
  }
  ThemPhim(phim:any){
    const api:string=`http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let obServe = this.http.post(api, phim);
    return obServe;
  }
  ThemHinhAnh(fileHinh, tenPhim) {
    const urlThemPhim:string = `http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`;
    let formData = new FormData();
    formData.append('Files', fileHinh);
    formData.append('TenPhim', tenPhim);
    let obServe: Observable<any> = this.http.post(urlThemPhim, formData);
    return obServe;
  }
  XoaPhim(phim: Phim) {
    let urlXoa = `http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${phim}`;
    let obServe= this.http.delete(urlXoa);
    return obServe;
  }
  CapNhatPhim(phim: any) {
    let urlCapNhat = `http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`;
    let obServe= this.http.post(urlCapNhat, phim);
    return obServe;
  }
  DatVe(ve: any) {
    let urlDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    let obServe = this.http.post(urlDatVe, ve);
    return obServe;
  }
}
