import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { RouteService } from './route.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin:boolean = false;
  isAuth:boolean = false;
  

  constructor(private routeService:RouteService,private userService:UserService) { }

  checkUser(firstName:string) {
    this.userService.getUserByName(firstName).subscribe(
      user => {
        if (user != null && user.firstName == firstName) {
          this.isAuth = true;
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
