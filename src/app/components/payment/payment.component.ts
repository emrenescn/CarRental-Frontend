import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  payments:Payment[]=[];
  paymentForm:FormGroup;
constructor(private paymentService:PaymentService,private rentalService:RentalService,private toastrService:ToastrService,
  private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder){}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    
  })
  this.createPaymentForm();
  this.getPayments();
}
getPayments(){
  this.paymentService.getPayments().subscribe(response=>{
    this.payments=response.data;
  });
}
createPaymentForm(){
  this.paymentForm=this.formBuilder.group({
  customerId:["",Validators.required],
  firstName:["",Validators.required],
  lastName:["",Validators.required],
  cardNumber:["",Validators.required],
  cvv:["",Validators.required],
  mount:["",Validators.required],
  year:["",Validators.required]
  });
}
pay(){
  if(this.paymentForm.valid){
    let paymentModel=Object.assign({},this.paymentForm.value);
    this.paymentService.pay(paymentModel).subscribe(response=>{
    this.toastrService.success(response.messsage,"Success");
    },responseError=>{
      if(responseError.error.Errors.length>0){
     for (let i = 0; i < responseError.error.Errors.length; i++) {
      this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation Error");
     }
      }
    });
  }
  else{
    this.toastrService.error("Form is missing","Attention");
  }
  
}

}
