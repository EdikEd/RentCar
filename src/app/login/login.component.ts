import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MessageService } from '../service/message.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showMessage:boolean = false;
  firstName:string = "";
  phone:string = "";
  message:string = "";

  constructor(private authService:AuthService, private routeService:RouteService,private messageService:MessageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.checkUser(this.firstName);
    if(!this.authService.getIsAuth()) {
      this.message = this.messageService.messageUnsuccessAuth();
      this.firstName = "";
      this.phone = "";
      this.showMessage = true;
    } 
  }

}
