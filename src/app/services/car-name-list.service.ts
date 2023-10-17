import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { CarNameList } from '../models/carNameList';

@Injectable({
  providedIn: 'root'
})
export class CarNameListService {
  apiUrl="http://localhost:34798/api/cars/getcarnamelist";
  constructor(private httpClient:HttpClient) { }
  getCarNameList():Observable<ListResponseModel<CarNameList>>{
   return this.httpClient.get<ListResponseModel<CarNameList>>(this.apiUrl);
  }
}
