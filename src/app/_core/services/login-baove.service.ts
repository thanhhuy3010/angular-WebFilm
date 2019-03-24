import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginBaoveService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    this.auth.KiemTraDangNhapAdmin();
    if (this.auth._isLoginAdmin) {
      return true;
    } else {
      this.route.navigate(['/']);
    }
  }

  constructor(private auth: AuthService , private route: Router) { }
}
