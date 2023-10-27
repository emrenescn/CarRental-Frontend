import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
;

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='http://localhost:34798/api/';
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall";
return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetails():Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBranId(brandId:number):Observable<ListResponseModel<CarDetail>>{
  let newPath=this.apiUrl+"cars/getcardetailbybrandid?brandId="+brandId;
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetailbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl+"cars/getall");
  }
  getCarByBrandIdAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
   let newPath=this.apiUrl+"cars/getcarbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId;
   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  add(car:Car):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/add";
    return this.httpClient.post<SingleResponseModel<Car>>(newPath,car);
  }
  update(car:Car):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/update";
    return this.httpClient.post<SingleResponseModel<Car>>(newPath,car);
  }
  delete(car:Car):Observable<SingleResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/delete";
    return this.httpClient.post<SingleResponseModel<Car>>(newPath,car);
  }
}
