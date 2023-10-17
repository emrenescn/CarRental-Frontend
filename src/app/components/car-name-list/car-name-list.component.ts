import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarNameList } from 'src/app/models/carNameList';
import { CarNameListService } from 'src/app/services/car-name-list.service';

@Component({
  selector: 'app-car-name-list',
  templateUrl: './car-name-list.component.html',
  styleUrls: ['./car-name-list.component.css']
})
export class CarNameListComponent implements OnInit {
  carNameList:CarNameList[];
  currentCarName:CarNameList;
  filterText="";
  constructor(private carNameListService:CarNameListService){
  }
ngOnInit(): void {
  this.getCarNameList();
}
getCarNameList(){
  this.carNameListService.getCarNameList().subscribe(response=>{
 this.carNameList=response.data;
  });
}
setCurrentCarName(carName:CarNameList){
this.currentCarName=carName;
}
getCurrentCarNameClass(carName:CarNameList){
  if(carName==this.currentCarName){
    return "list-group-item active";
  }
  else{
    return "list-group-item";
  }
}
getAllCarNameClass(){
  if(!this.currentCarName){
    return "list-group-item active";
  }
  else{
    return "list-group-item";
  }
}
}
