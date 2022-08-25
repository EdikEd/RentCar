import { Component, Input, OnInit } from '@angular/core';
import { Rent } from '../interface/rent';
import { User } from '../interface/user';
import { AuthService } from '../service/auth.service';
import { RentService } from '../service/rent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rents:Rent[] = [];

  constructor(
    private authService:AuthService,
    private rentService:RentService
  ) { }

  ngOnInit(): void {
    this.getRents();
  }

  getUserData() {
    return AuthService.user;
  }

  getRents() {
    this.rentService.getRentAll().subscribe(
      rents => {
         this.rents = rents.filter((rent) => {
            return rent.user.firstName == AuthService.user.firstName
         })
      }
    );
    
  }



}
