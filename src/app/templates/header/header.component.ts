import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { 
    
  }

  ngOnInit(): void {
    console.log(this.getCurrentRoute());
    
  }

  getIsAuth():boolean {
    return this.authService.getIsAuth();
  }

  logout() {
    this.authService.setIsAuth(false);
    this.route.navigateByUrl('/');
  }

  getCurrentRoute() {
    return this.route.url;
  }

}
