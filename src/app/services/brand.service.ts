import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import {ListResponseModel} from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService  {
  apiUrl='http://localhost:34798/api/brands/';
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    let newpath=this.apiUrl+"getall";
 return this.httpClient.get<ListResponseModel<Brand>>(newpath);
  }
  add(brand:Brand):Observable<SingleResponseModel<Brand>>{
    let newpath=this.apiUrl+"Add";
    return this.httpClient.post<SingleResponseModel<Brand>>(newpath,brand);
  }
  update(brand:Brand):Observable<SingleResponseModel<Brand>>{
 let newpath=this.apiUrl+"update";
 return this.httpClient.post<SingleResponseModel<Brand>>(newpath,brand);
  }
  delete(brand:Brand):Observable<SingleResponseModel<Brand>>{
    let newpath=this.apiUrl+"delete";
    return this.httpClient.post<SingleResponseModel<Brand>>(newpath,brand);
  }
}
