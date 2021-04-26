import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class IsRegisterGuard implements CanActivate {
  constructor(private commonService: CommonService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.commonService.isRegistered) {
        this.router.navigate(['auth/login'])
      } else {
        this.router.navigate(['auth/register'])
      }
    return false;
  }

}
