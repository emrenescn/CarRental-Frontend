import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import {HttpClient} from '@angular/common/http';// componenti angulara bağlamak için import ettik http clienti angulara bildirmek için onu constructorda enjekte etmemiz gerekiyor
import { CarService } from 'src/app/services/car.service';
import { CarResponseModel } from 'src/app/models/carReponseModel';
import { carDetail } from 'src/app/models/carDetail';
//metodun çalışması için module olarak httpClientModule eklememiz gerekir (app.module'ye import edilecek)
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:Car[]=[];
  carDetails:carDetail[]=[];
constructor(private carService:CarService){
}
ngOnInit(): void {
 // this.getCars();
  this.getCarDetails();
}
getCars(){
   this.carService.getCars().subscribe(response=>{
    this.cars=response.data;
   });
}
getCarDetails(){
  this.carService.getCarDetails().subscribe(response=>
    this.carDetails=response.data);
 }
}
