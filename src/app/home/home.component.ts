import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    
  }

  getUserData() {
    return AuthService.user;
  }


}
