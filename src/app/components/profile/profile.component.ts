import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
passwordForm:FormGroup;
userNameForm:FormGroup;
constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private authService:AuthService){}
ngOnInit(): void {
  this.createPasswordForm();
  this.createUserNameForm();
}
createPasswordForm(){
  this.passwordForm=this.formBuilder.group({
    id:["",Validators.required],
    oldPassword:["",Validators.required],
    newPassword:["",Validators.required],
    repeatPassword:["",Validators.required]
  })
}
createUserNameForm(){
this.userNameForm=this.formBuilder.group({
  id:["",Validators.required],
  firstName:["",Validators.required],
  lastName:["",Validators.required]
})
}
updateName(){
  if(this.userNameForm.valid){
    let userModel=Object.assign({},this.userNameForm.value);
    this.authService.updateName(userModel).subscribe(response=>{
      this.toastrService.success(response.messsage,"Name Updated");
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
         this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Error");
        }
      }
    })
  }
  else{
    this.toastrService.error("Form is missing","Error");
  }
}
updatePassword(){
  if(this.passwordForm.valid){
   let passwordModel=Object.assign({},this.passwordForm.value);
   this.authService.updatePassword(passwordModel).subscribe(response=>{
    this.toastrService.success(response.messsage,"Password Updated");
   },responseError=>{
    if(responseError.error.Errors.length>0){
      for (let i = 0; i < responseError.error.Errors.length; i++) {
      this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Error");
      }
    }
   })
  }
  else{
     this.toastrService.error("Form is missing","Error");
  }
}
}
