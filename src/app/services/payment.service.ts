import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 apiUrl="http://localhost:34798/api/";
  constructor(private httpClient:HttpClient) {
   }
  getPayments():Observable<ListResponseModel<Payment>>{
    let newPath=this.apiUrl+"payments/getall";
  return this.httpClient.get<ListResponseModel<Payment>>(newPath);
  } 
  pay(payment:Payment):Observable<SingleResponseModel<Payment>>{
    let newPath=this.apiUrl+"payments/add";
   return this.httpClient.post<SingleResponseModel<Payment>>(newPath,payment);
  }
}
