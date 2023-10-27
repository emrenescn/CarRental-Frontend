import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {
  carDeleteForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private carService:CarService,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.createCarDeleteForm();
  }
  createCarDeleteForm(){
    this.carDeleteForm=this.formBuilder.group({
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      description:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required]
    });
  }
  delete(){
     if(this.carDeleteForm.valid){
      let carModel=Object.assign({},this.carDeleteForm.value);
      this.carService.delete(carModel).subscribe(response=>{
        this.toastrService.success(response.messsage,"Success");
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
