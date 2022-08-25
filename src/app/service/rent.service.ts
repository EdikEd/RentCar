import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rent } from '../interface/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private readonly apiUri = environment.apiUri;


  constructor(private http:HttpClient) { }


  setRent(rent:Rent):Observable<Rent> {
    return this.http.post<Rent>(`${this.apiUri}/rent-car`, rent);
  }

  getRentAll():Observable<Rent[]> {
    return this.http.get<Rent[]>(`${this.apiUri}/rent`);
  } 

  public deleteRent(id:string):Observable<Rent> {
    return this.http.delete<Rent>(`${this.apiUri}/delete-rent/${id}`);
  }

}
