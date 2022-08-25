import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/interface/car';
import { AuthService } from 'src/app/service/auth.service';
import { CarService } from 'src/app/service/car.service';
import { RentService } from 'src/app/service/rent.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  title:string = "rent car";
  cars:Car[] = [];
  currentCar:any;
  showCarInfo:boolean = false;
  rentDate:any;
  date:string = "";
  searchCars:Car[] = [];
  carModel:string = "";
  

  // Date
  currentDate:Date = new Date();

  constructor(
    private carService:CarService,
    private userService:UserService,
    private rentService:RentService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  showAllCars() {
    this.getCars();
  }

  searchCar() {
    this.cars = this.searchCars.filter(
      (car) => {
        return car.model.includes(this.carModel)
      }
    );
    
  }

  showCurrentCar(car:Car) {
    this.currentCar = car;
    this.showCarInfo = true;
  }

  RentCar() {
    this.rentDate = new Date(this.date);    
    this.rentService.setRent({
      user:AuthService.user,
      car:this.currentCar,
      rentStartDate:this.currentDate,
      rentEndDate:this.rentDate
    }).subscribe();
    this.router.navigateByUrl("/home");
  }

  getCars() {
    this.carService.getCars().subscribe(
      cars => {
        this.cars = cars;
        this.searchCars = cars;
      }
    );
  }

}
