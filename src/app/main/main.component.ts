import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  carImageUrls:string[] = [
    "https://www.supercars.net/blog/wp-content/uploads/2016/04/2004_Ferrari_612Scaglietti-15-1024.jpg",
    "http://carsot.com/images/aston-martin-db9-i-restyling-2-2012-now-cabriolet-interior-3.jpg"
  ];

  carImageBrands:string[] = [
    "../../../assets/images/alfa_romeo_brand.png",
    "../../../assets/images/ferrari_brand.png",
    "../../../assets/images/lamborghini_brand.png",
    "../../../assets/images/daewoo_brand.png",
    "../../../assets/images/porsche_brand.png",
    "../../../assets/images/ford_brand.png",
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
