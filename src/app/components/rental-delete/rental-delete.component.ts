import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-delete',
  templateUrl: './rental-delete.component.html',
  styleUrls: ['./rental-delete.component.css']
})
export class RentalDeleteComponent implements OnInit{
rentalDeleteForm:FormGroup;
constructor(private formBuilder:FormBuilder,private rentalService:RentalService,private toastrService:ToastrService ){}
ngOnInit(): void {
  this.createRentalDeleteForm();
}
createRentalDeleteForm(){
  this.rentalDeleteForm=this.formBuilder.group({
    carId:["",Validators.required],
    costumerId:["",Validators.required],
    rentDate:["",Validators.required],
    returnDate:["",Validators.required]
  })
}
delete(){
  if(this.rentalDeleteForm.valid){
    let rentalModel=Object.assign({},this.rentalDeleteForm.value);
    this.rentalService.delete(rentalModel).subscribe(response=>{
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
