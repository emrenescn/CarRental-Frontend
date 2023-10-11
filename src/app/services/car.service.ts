import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carReponseModel';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='http://localhost:34798/api/cars/getall';
  apiUrl2="http://localhost:34798/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<CarResponseModel>{
return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
  getCarDetails():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl2);
  }
}
