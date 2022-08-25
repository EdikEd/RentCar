import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { RouteService } from './route.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin:boolean = false;
  private static isAuth:boolean = false;
  

  constructor(private routeService:RouteService,private userService:UserService) { }

  public setIsAuth(value:boolean) {
    AuthService.isAuth = value;
  }

  public getIsAuth() {
    return AuthService.isAuth;
  }


  checkUser(firstName:string) {
    this.userService.getUserByName(firstName).subscribe(
      user => {
        if (user != null && user.firstName == firstName) {
          this.setIsAuth(true);
          if (user.phone == "0950912869" && user.firstName == "admin") {
            this.isAdmin = true;
            this.routeService.redirect('/admin');
          } else {
            this.routeService.redirect('/home');
          }
        } 
        
      }
    )
     
  }
}
