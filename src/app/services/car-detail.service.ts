import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="http://localhost:34798/api/cars/";
  constructor(private httpClient:HttpClient) { }
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"getcardetailsbycarid?carId="+carId;
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  
}
