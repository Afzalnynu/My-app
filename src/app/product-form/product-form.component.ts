import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ProductFormsService } from '../product-forms.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
constructor(private _productForm:ProductFormsService){}

public productForm:FormGroup=new FormGroup({
  name:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
  price: new FormControl("",[Validators.required,Validators.max(100000),Validators.min(100)]),
  model: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  freeDelivery: new FormControl("",[Validators.required]),
  image: new FormControl("",[Validators.required]),
    waranty: new FormGroup ({
      eligible: new FormControl(),
      months: new FormControl('',Validators.required),
    }),
  sellerInfo:new FormArray([]),
  commentInfo:new FormArray([]),
    ratings:new FormGroup({
      one:new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
      two:new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
      three:new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
      four: new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
      five: new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
    }),
  productType:new FormControl(),
  height: new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
  width: new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),
  weight: new FormControl("",[Validators.required,Validators.max(10000),Validators.min(0)]),

})
get sellerInfoArray(){
  return this.productForm.get('sellerInfo') as FormArray
}

get commentInfoArray(){
  return this.productForm.get('commentInfo') as FormArray
}

addSeller(){
  this.sellerInfoArray.push(
    new FormGroup({
      name: new FormControl(),
        address:new FormGroup({
          line1: new FormControl('',Validators.required),
          area: new FormControl('',Validators.required),
          city: new FormControl('',Validators.required),
          pincode: new FormControl('',Validators.required)
        })
    })
  )
}
submit(){
    console.log(this.productForm)
    // console.log((this.productForm.value.waranty.eligible))
    this._productForm.postdataDetails(this.productForm.value).subscribe(
      (data:any)=>{
        alert("Added Succesfully")
      },
      (err:any)=>{
        alert("Internal Error")
      }
    )
}
delete(i:number){
  this.sellerInfoArray.removeAt(i)
}
addComment(){
  this.commentInfoArray.push(
    new FormGroup({
      time: new FormControl('',Validators.required),
      comment: new FormControl('',Validators.required)
    })
  )
}
delete1(i:number){
  this.commentInfoArray.removeAt(i)
}
}
