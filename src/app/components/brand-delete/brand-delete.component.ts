import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css']
})
export class BrandDeleteComponent implements OnInit {
  brandDeleteForm:FormGroup;
constructor(private formBuilder:FormBuilder,private brandService:BrandService,private toastrService:ToastrService){}
ngOnInit(): void {
  this.createBrandDeleteForm();
}
createBrandDeleteForm(){
 this.brandDeleteForm=this.formBuilder.group({
brandId:["",Validators.required],
brandName:["",Validators.required]
 });
}
delete(){
  if(this.brandDeleteForm.valid){
    let brandModel=Object.assign({},this.brandDeleteForm.value);
    this.brandService.delete(brandModel).subscribe(response=>{
    this.toastrService.success(response.messsage,"Success");
    },
    responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Error");
        }
      }
    });
  }
  else{
    this.toastrService.error("Form is missing","Error");
  }
}
}
