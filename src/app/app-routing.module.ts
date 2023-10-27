import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarDeleteComponent } from './components/car-delete/car-delete.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandDeleteComponent } from './components/brand-delete/brand-delete.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorDeleteComponent } from './components/color-delete/color-delete.component';
import { RentalDeleteComponent } from './components/rental-delete/rental-delete.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/carnamelist/:carId",component:CarDetailComponent},
  {path:"payments",component:PaymentComponent},
  {path:"rentals/add",component:RentalAddComponent},
  {path:"rentals/delete",component:RentalDeleteComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"cars/update",component:CarUpdateComponent},
  {path:"cars/delete",component:CarDeleteComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"brands/update",component:BrandUpdateComponent},
  {path:"brands/delete",component:BrandDeleteComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"colors/update",component:ColorUpdateComponent},
  {path:"colors/delete",component:ColorDeleteComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
