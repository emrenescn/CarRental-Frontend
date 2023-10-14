import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';


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
}
