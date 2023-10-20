import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 apiUrl="http://localhost:34798/api/payments/";
  constructor(private httpClient:HttpClient) {
   }
  getPayments():Observable<ListResponseModel<Payment>>{
    let newPath=this.apiUrl+"getall";
  return this.httpClient.get<ListResponseModel<Payment>>(this.apiUrl);
  } 
  pay(payment:Payment):Observable<ResponseModel>{
   let newPath=this.apiUrl+"add";
   return this.httpClient.post<ResponseModel>(newPath,payment);
  }
}
