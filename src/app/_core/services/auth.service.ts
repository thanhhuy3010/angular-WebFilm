import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public checkLoginUser:boolean = false;
  public _isLoginAdmin: boolean = false;
  public _isLoginUser: boolean = false;

  constructor() { }
  DangNhap(){
    this.checkLoginUser = true;
  }
  DangXuat(){
    this.checkLoginUser = false;
  }
  KiemTraDangNgap(){
    if(JSON.parse(localStorage.getItem('userLogin')) == null){
      this.checkLoginUser = false;
    } else{
      this.checkLoginUser = true;
    }
  }
  KiemTraDangNhapAdmin(){
    if(JSON.parse(localStorage.getItem('AdminDangNhap')) == null){
      this.checkLoginUser = false;
    } else{
      this.checkLoginUser = true;
    }
  }
  LoginAdmin(){
    this._isLoginAdmin = true;
  }
  LogoutAdmin(){
    this._isLoginAdmin = true;
  }
}
