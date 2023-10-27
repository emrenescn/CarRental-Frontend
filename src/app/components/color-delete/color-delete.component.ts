import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css']
})
export class ColorDeleteComponent implements OnInit {
colorDeleteForm:FormGroup;
constructor(private formBuilder:FormBuilder,private colorService:ColorService,private toastrService:ToastrService){}
ngOnInit(): void {
  this.createColorDeleteForm();
}
createColorDeleteForm(){
  this.colorDeleteForm=this.formBuilder.group({
    colorId:["",Validators.required],
    colorName:["",Validators.required]
  })
}
delete(){
  if(this.colorDeleteForm.valid){
  let colorModel=Object.assign({},this.colorDeleteForm.value);
  this.colorService.delete(colorModel).subscribe(repsonse=>{
    this.toastrService.success(repsonse.messsage,"Success");
  },responseError=>{
    if(responseError.error.Errors.length>0){
      for (let i = 0; i < responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Error");
        
      }
    }
  })
  }
  else{
    this.toastrService.error("Form is missing","Error");
  }
}
}
