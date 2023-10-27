import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://localhost:34798/api/auth/";
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"login";
   return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel);
  }
  isAuthenticated(){
   if(localStorage.getItem("token")){
    return true;
   }
   else{
    return false;
   }
  }
  register(registerModel:RegisterModel):Observable<ResponseModel>{
  let newPath=this.apiUrl+"register";
  return this.httpClient.post<ResponseModel>(newPath,registerModel);
  }
}
