import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { PasswordModel } from '../models/passwordModel';
import { LocalStorageService } from './localstorage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://localhost:34798/api/auth/";
  user:User={
    firstName:"",
    lastName:"",
    id:0,
   email:""
  }
  token:string | null="";
  decodedTokenKey:null;
  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService,private jwtHelperService:JwtHelperService) { }
  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"login";
   return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel);
  }
  logout(){
    return this.localStorageService.removeData("token");
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
  updatePassword(passwordModel:PasswordModel):Observable<ResponseModel>{
  let newPath=this.apiUrl+"updatepassword";
  return this.httpClient.post<ResponseModel>(newPath,passwordModel);
  }
  decodeToken(token:any){
   return this.jwtHelperService.decodeToken(token);
  }
  getUser(){
    let decodedToken=this.decodeToken(this.localStorageService.getData("token"));
    if(decodedToken){
      let tokenInfoName=Object.keys(decodedToken).filter((t)=>t.endsWith('/name'))[0];
      let userName=(String)(decodedToken[tokenInfoName]);
      let tokenInfoId=Object.keys(decodedToken).filter((t)=>t.endsWith('/nameidentifier'))[0];
      let userId=(Number)(decodedToken[tokenInfoId]);
      let tokenInfoEmail=decodedToken.email;
      this.user={
        firstName:userName,
        lastName:"",
        id:userId,
        email:tokenInfoEmail
      }
    }
    return this.user;
  }
  updateName(user:User):Observable<SingleResponseModel<User>>{
   let newPath=this.apiUrl+"updatename";
   return this.httpClient.post<SingleResponseModel<User>>(newPath,user);
  }
   
  
}
