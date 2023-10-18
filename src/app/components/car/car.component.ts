import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http'; // componenti angulara bağlamak için import ettik http clienti angulara bildirmek için onu constructorda enjekte etmemiz gerekiyor
import { CarService } from 'src/app/services/car.service';
import { CarDetail } from 'src/app/models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { BrandService } from 'src/app/services/brand.service';
//metodun çalışması için module olarak httpClientModule eklememiz gerekir (app.module'ye import edilecek)
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  filterText = '';
  colorFilter:number;
  brandFilter:number;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private colorService: ColorService,
    private brandService: BrandService
  ) {}
  ngOnInit(): void {
    // this.getCars();
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrandId(params['brandId']);
      }
       else if (params['colorId']) {
        this.getCarsByColorId(params['colorId']);
      }
       else {
        this.getCarDetails();
        this.getBrands();
        this.getColors();
        this.clearFilter();
      }
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCarDetails() {
    this.carService
      .getCarsDetails()
      .subscribe((response) => (this.carDetails = response.data));
  }
  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBranId(brandId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCarByBrandIdAndColorId(brandId:number,colorId:number){
    this.carService.getCarByBrandIdAndColorId(brandId,colorId).subscribe(response=>{
      this.carDetails=response.data;
    })
  }
  clearFilter(){
    this.getCarDetails();
    this.brandFilter=0;
    this.colorFilter=0;
  }
}
