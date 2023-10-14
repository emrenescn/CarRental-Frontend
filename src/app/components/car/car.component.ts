import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';// componenti angulara bağlamak için import ettik http clienti angulara bildirmek için onu constructorda enjekte etmemiz gerekiyor
import { CarService } from 'src/app/services/car.service';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';
//metodun çalışması için module olarak httpClientModule eklememiz gerekir (app.module'ye import edilecek)
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:Car[]=[];
  carDetails:CarDetail[]=[];
constructor(private carService:CarService,private activatedRoute:ActivatedRoute){
}
ngOnInit(): void {
 // this.getCars();
 this.activatedRoute.params.subscribe(params=>{
  if(params["brandId"]){
    this.getCarsByBrandId(params["brandId"]);
  }
  else if(params["colorId"]){
   this.getCarsByColorId(params["colorId"]);
  }
  else{
    this.getCarDetails();
  }
 })

}
getCars(){
   this.carService.getCars().subscribe(response=>{
    this.cars=response.data;
   });
}
getCarDetails(){
  this.carService.getCarsDetails().subscribe(response=>
    this.carDetails=response.data);
 }
 getCarsByBrandId(brandId:number){
 this.carService.getCarsByBranId(brandId).subscribe(response=>{
  this.carDetails=response.data;
 })
 }
 getCarsByColorId(colorId:number){
  this.carService.getCarsByColorId(colorId).subscribe(response=>{
    this.carDetails=response.data;
  })

 }
}
