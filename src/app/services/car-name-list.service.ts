import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarNameListService {
  apiUrl="http://localhost:34798/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }
  getCarNameList():Observable<ListResponseModel<CarDetail>>{
   return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl);
  }
}
