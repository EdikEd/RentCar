import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../interface/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly apiUri = environment.apiUri;


  constructor(private http:HttpClient) { }

  public getCars():Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUri}/cars`);
  }

  public deleteCar(id:string):Observable<Car> {
    return this.http.delete<Car>(`${this.apiUri}/delete-car/${id}`);
  }
  
}
