import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  @Output() trailerModalPhim = new EventEmitter;
  
  constructor(private http:HttpClient) { 

  }

  LayDanhSachPhim():Observable<any[]>{
<<<<<<< HEAD
    const api:string = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP01`;
    let observable:any = this.http.get(api);
    return observable;
  }
  getDetailFilm(filmID:string):Observable<any[]>{
    const api:string = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${filmID}`;
=======
    const api:string = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP10`;
>>>>>>> 6d01a86c3d7890fd2153a11e4c5ccba7bf16a4cf
    let observable:any = this.http.get(api);
    return observable;
  }

  LayChiTietPhim(maPhim:string):Observable<any[]>{
    const api:string = `http://sv2cy.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;
    let observable:any= this.http.get(api);
    return observable;// observable chứa dữ liệu từ sever trả về 
  }

  LayChiTietPhongVe(maLichChieu:string):Observable<any[]>{
    const api:string = `http://sv2cy.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaPhim=${maLichChieu}`;
    let observable:any= this.http.get(api);
    return observable;// observable chứa dữ liệu từ sever trả về 
  }
}
