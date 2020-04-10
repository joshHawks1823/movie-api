import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { Route } from '@angular/compiler/src/core';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) : boolean {
    
    // this will be passed from the route config
    // on the data property
    

    const token = localStorage.getItem('token');
    
    //decoce the token to get its payload
    const tokenPayload = decode(token);
    console.log(tokenPayload);

    if (
      !this.auth.isAuthenticated() || localStorage.getItem('userType') !== "2"
    ) {
      this.router.navigate(['profile']);
      return false;
    }
    return true;
  }
}
