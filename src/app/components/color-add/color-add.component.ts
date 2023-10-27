import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit{
  colorAddForm:FormGroup;
  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.createColorAddForm();
  }
  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }
  add(){
    if(this.colorAddForm.valid){
      let colorModel=Object.assign({},this.colorAddForm.value);
      this.colorService.add(colorModel).subscribe(response=>{
        this.toastrService.success(response.messsage,"Succes");
      },repsonseError=>{
        if(repsonseError.error.Errors.length>0){
          for (let i = 0; i < repsonseError.error.Errors.length; i++) {
            this.toastrService.error(repsonseError.error.Errors[i].ErrorMessage,"Error");
            
          }
        }
      })
    }
    else{
      this.toastrService.error("Form is missing","Error");
    }
  }

}
