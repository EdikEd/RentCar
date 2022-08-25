import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interface/car';
import { CarService } from 'src/app/service/car.service';

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

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  showCurrentCar(car:Car) {
    this.currentCar = car;
    this.showCarInfo = true;
  }

  getCars() {
    this.carService.getCars().subscribe(
      cars => {
        this.cars = cars;
      }
    );
  }

}
