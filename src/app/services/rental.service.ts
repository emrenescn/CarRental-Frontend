import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';
import { RentDetailResponseModel } from '../models/rentDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl='http://localhost:34798/api/rentals/getall';
  apiUrl2='http://localhost:34798/api/rentals/getrentaldetails';
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
  getRentalDetails():Observable<RentDetailResponseModel>{
return this.httpClient.get<RentDetailResponseModel>(this.apiUrl2);
  }

}
