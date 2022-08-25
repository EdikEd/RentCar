import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  user:User  = {
    firstName:"",
    lastName:"",
    address:"",
    phone:"",
  }

  ngOnInit(): void {
  }

  onRegist() {
    this.userService.addUser(this.user).subscribe();
    this.router.navigateByUrl('/login');
  }

}
