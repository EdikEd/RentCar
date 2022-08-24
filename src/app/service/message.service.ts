import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messageUnsuccessAuth() {
    return "There no user with this name in database!";
  }
}
