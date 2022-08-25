import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interface/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cars:Car[] = [];

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(
      cars => {
        this.cars = cars;
        console.log(this.cars);
      }
    );
  }
  

}
