import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl='http://localhost:34798/api/rentals/';
 
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"getall");
  }
  getRentalDetails():Observable<ListResponseModel<RentDetail>>{
return this.httpClient.get<ListResponseModel<RentDetail>>(this.apiUrl+"getrentaldetails");
  }
  add(rental:Rental):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"rulesforadding",rental);
  }

}
