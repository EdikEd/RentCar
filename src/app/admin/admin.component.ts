import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { CarService } from '../service/car.service';
import { MessageService } from '../service/message.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  switchKey:number = 0;
  collection:any = [];
  message:string="";
  showMessage:boolean = false;
  user:User  = {
    firstName:"",
    lastName:"",
    address:"",
    phone:"",
  }


  constructor(private userService:UserService,private carService:CarService, private messageService:MessageService) { }

  ngOnInit(): void {

  }

// User part

  getUsers() {
    this.collection = [];
    this.switchKey = 1;
    this.userService.getUsers().subscribe(
      users => {
      this.collection = users;
      console.log(this.collection);
      }
    );
  }

  addUserShow() {
    this.switchKey = 3;
    this.showMessage = false;
  }

  addUser() {
    
    this.userService.addUser(this.user).subscribe();
    this.showMessage = true;
    this.message = "User was successfully added";
  }
 
  deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe();
    this.deleteElem(id);
  }

// Cars part

  getCars() {
    this.collection = [];
    this.switchKey = 2;

    this.carService.getCars().subscribe(
      cars => {
        this.collection = cars;
        console.log(this.collection);
      }
    );
  }

  addCar() {

  }

  deleteCar(id:string) {
    this.carService.deleteCar(id).subscribe();
    this.deleteElem(id);
  }


   // Delete elem from view arr
  deleteElem(id:string) {
    let deletedElem = this.collection.find((obj: { id: string; }) => {
      return obj.id == id;
    });
    
    let index = this.collection.indexOf(deletedElem);
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
  }

}
