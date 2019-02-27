import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
  constructor(private http:HttpClient) { 

  }

  LayDanhSachPhim():Observable<any[]>{
    const api:string = `http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05`;
    let observable:any = this.http.get(api);
    return observable;
  }

}
