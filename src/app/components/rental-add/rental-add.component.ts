import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator,Validators, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {
  rentalAddForm:FormGroup;
constructor(private formBuilder:FormBuilder,private rentalService:RentalService,private toastrService:ToastrService){}
ngOnInit(): void {
  this.createRentalAddForm();
}
createRentalAddForm(){
  this.rentalAddForm=this.formBuilder.group({
  carId:["",Validators.required],
  customerId:["",Validators.required],
  rentDate:["",Validators.required],
  returnDate:["",Validators.required]
  });
}
add(){
  if(this.rentalAddForm.valid){
    let rentalModel=Object.assign({},this.rentalAddForm.value);
     this.rentalService.add(rentalModel).subscribe(response=>{
     this.toastrService.success("You are directed to the payment page","Success");
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error");
        }
      }
    });
  }
  else{
    this.toastrService.error("Form is missing","Error");
  }
}

}
