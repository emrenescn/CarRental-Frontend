import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{
  carDetails:CarDetail[];
  carImages:CarImage[];
  rentDate:Date;
  returnDate:Date;
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute){}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params["carId"]){
      this.getCarDetailByCarId(params["carId"]);
      this.getImagesByCarId(params["carId"]);
    } 
  })
}
getCarDetailByCarId(carId:number){
this.carDetailService.getCarDetailsByCarId(carId).subscribe(respone=>{
  this.carDetails=respone.data;
})
}
getImagePath(imagePath:string){
return "http://localhost:34798/"+imagePath;
}
getImagesByCarId(carId:number){
this.carDetailService.getImagesByCarId(carId).subscribe(response=>{
  this.carImages=response.data;
})
}
}
