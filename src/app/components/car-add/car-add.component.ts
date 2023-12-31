import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit{
  carAddForm:FormGroup;
constructor(private formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService){}
ngOnInit(): void {
  this.createCarAddForm();
}
createCarAddForm(){
this.carAddForm=this.formBuilder.group({
brandId:["",Validators.required],
colorId:["",Validators.required],
modelYear:["",Validators.required],
dailyPrice:["",Validators.required],
description:["",Validators.required],
carFindeks:["",Validators.required]
});
}
add(){
if(this.carAddForm.valid){
  let carModel=Object.assign({},this.carAddForm.value);
  this.carService.add(carModel).subscribe(response=>{
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
