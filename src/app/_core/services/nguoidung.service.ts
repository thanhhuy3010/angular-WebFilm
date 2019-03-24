import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NguoiDung } from '../models/nguoiDung';
import { userLogin } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  constructor(private http:HttpClient) { }

  LayDanhSachNguoiDung():Observable<any[]>{
    const api:string = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    // http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01

    let observable:any = this.http.get(api);
    return observable;
  }

  LoginNguoiDung(user: NguoiDung){
    let urlDangNhap = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.TaiKhoan}&matkhau=${user.MatKhau}`;
    let observable: Observable<any> = this.http.post(urlDangNhap,user);
    return observable;
  }

  public DangKy(nguoiDung:NguoiDung):Observable<any>{
    let apiDangKy:string = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiDangKy,nguoiDung, {headers:header});
    return observable;
  }
  CapNhat(user: NguoiDung) {
    let urlCapNhat = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`;
    let obServe: Observable<any> = this.http.post(urlCapNhat, user);
    return obServe;
  }
  XoaNguoiDung(user: NguoiDung) {
    let urlXoa = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`;
    let obServe: Observable<any> = this.http.delete(urlXoa);
    return obServe;
  }
  
  public DangNhap(userLogin:userLogin):Observable<any>{
    let apiDangNhap:string = `http://svcy2.myclass.vn/api/quanlynguoidung/DangNhap`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiDangNhap, userLogin, {headers:header});
    return observable;
  }
  KiemTraDangNhap(): boolean {
    let nguoiDung = localStorage.getItem("localNguoiDung");
    if (nguoiDung != null) {
      return true;
    }
    return false;
  }
  LayThongTinDangNhap(): NguoiDung {
    if (this.KiemTraDangNhap()) {
      let nguoiDung: NguoiDung = JSON.parse(localStorage.getItem('localNguoiDung'));
      return nguoiDung;
    }
    return null;
  }
  DangXuat():void{
    localStorage.removeItem('localNguoiDung');
  }
  layLichSuDatVe(user: NguoiDung) {
    let urlLichSu = `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${user.TaiKhoan}`;
    let obServe: Observable<any> = this.http.post(urlLichSu, user);
    return obServe;
  }

}
