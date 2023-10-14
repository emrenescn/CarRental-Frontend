import { Component, OnInit } from '@angular/core';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent  implements OnInit {
  images:CarImage[]=[];
  constructor(private carImageService:CarImageService){}
ngOnInit(): void {
  this.getCarImages();
}
getCarImages(){
  this.carImageService.GetCarImages().subscribe(response=>{
    this.images=response.data;
  })
}
}
