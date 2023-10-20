import { Component, OnInit } from '@angular/core';
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
  payment:Payment;
  firstName="";
  lastName="";
  cardNumber="";
  cvv:number;
  mount:number;
  year:number;
constructor(private paymentService:PaymentService,private rentalService:RentalService,private toastrService:ToastrService){}
ngOnInit(): void {
  this.getPayments();
}
getPayments(){
  this.paymentService.getPayments().subscribe(response=>{
    this.payments=response.data;
  });
}
pay(){
  this.paymentService.pay(this.payment).subscribe(response=>{
    this.toastrService.success("Payment Successful");
  })
}

}
