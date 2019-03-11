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

  public DangKy(nguoiDung:NguoiDung):Observable<any>{
    let apiDangKy:string = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung    `;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiDangKy,nguoiDung, {headers:header});
    return observable;
  }
  
  public DangNhap(userLogin:userLogin):Observable<any>{
    let apiDangNhap:string = `http://svcy3.myclass.vn/api/quanlynguoidung/DangNhap`;
    let header = new HttpHeaders();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observable = this.http.post(apiDangNhap, userLogin, {headers:header});
    return observable;
  }

}
