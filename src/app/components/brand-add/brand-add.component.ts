import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
brandAddForm:FormGroup;
constructor(private formBuilder:FormBuilder,private brandService:BrandService,private toastrService:ToastrService){}
ngOnInit(): void {
  this.createBrandAddForm();
}
createBrandAddForm(){
  this.brandAddForm=this.formBuilder.group({
    brandName:["",Validators.required]
  });
}
add(){
  if(this.brandAddForm.valid){
  let brandModel=Object.assign({},this.brandAddForm.value);
  this.brandService.add(brandModel).subscribe(response=>{
  this.toastrService.success(response.messsage,"Succes");
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
