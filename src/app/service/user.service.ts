import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUri = environment.apiUri;

  constructor(private http:HttpClient) { }


  public getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUri}/users`);
  }

  public getUserByName(name:String):Observable<User> {
    return this.http.get<User>(`${this.apiUri}/find-user/${name}`);
  }

  public addUser(user:User):Observable<User> {
    return this.http.post<User>(`${this.apiUri}/add-user`, user);
  }

  public deleteUser(id:string):Observable<User> {
    return this.http.delete<User>(`${this.apiUri}/delete-user/${id}`);
  }
}
