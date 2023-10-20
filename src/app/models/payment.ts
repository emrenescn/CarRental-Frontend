export interface Payment{
    paymentId:number;
    customerId:number;
    firstName:string;
    lastName:string;
    cardNumber:string;
    cvv:number;
    mount:number;
    year:number;
}