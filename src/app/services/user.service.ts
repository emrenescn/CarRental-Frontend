import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl="http://localhost:34798/api/users/";
  constructor(private httpClient:HttpClient) { }
  getByUserId(userId:number):Observable<SingleResponseModel<User>>{
  let newPath=this.apiUrl+"getbyid?id="+userId;
  return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
  getUsers():Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
}
