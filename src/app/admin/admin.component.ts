import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  switchKey:number = 0;
  collection:any = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }

// User part

  getUsers() {
    this.collection = [];
    this.userService.getUsers().subscribe(
      users => {
      this.collection = users
      console.log(this.collection)
      }
    );
    this.switchKey = 1;
  }

  addUser() {

  }

  deleteUser(id:string) {
    this.userService.deleteUser(id).subscribe();

    // Delete elem from view arr
    let deletedElem = this.collection.find((obj: { id: string; }) => {
      return obj.id == id;
    });
    
    let index = this.collection.indexOf(deletedElem);
    if (index !== -1) {
      this.collection.splice(index, 1);
    }
    
  }

// Cars part

  getCars() {
    this.collection = [];
    this.switchKey = 2;
  }

  addCar() {

  }

}
