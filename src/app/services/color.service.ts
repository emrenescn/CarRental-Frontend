import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';



@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl='http://localhost:34798/api/colors/';
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<Color>>{
    let path=this.apiUrl+"getall";
return this.httpClient.get<ListResponseModel<Color>>(path);
  }
add(color:Color):Observable<SingleResponseModel<Color>>{
 let newPath=this.apiUrl+"Add";
return this.httpClient.post<SingleResponseModel<Color>>(newPath,color);
  }
update(color:Color):Observable<SingleResponseModel<Color>>{
let newPath=this.apiUrl+"update";
return this.httpClient.post<SingleResponseModel<Color>>(newPath,color);
}
delete(color:Color):Observable<SingleResponseModel<Color>>{
  let newPath=this.apiUrl+"delete";
  return this.httpClient.post<SingleResponseModel<Color>>(newPath,color);
}
}
