import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{
  userInfo:User=this.authService.getUser();
 constructor(private localStorageService:LocalStorageService,private userService:UserService,private activatedRoute:ActivatedRoute
  ,private authService:AuthService,private toastrService:ToastrService,private jwtHelperService:JwtHelperService){
}
ngOnInit(): void {
  console.log(this.userInfo.id);
}
isAuthenticated(){
return this.authService.isAuthenticated();
}
logout(){
  this.authService.logout();
  this.toastrService.info("Log out");
}

}
