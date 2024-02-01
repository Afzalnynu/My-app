import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(){}
  public userForm:FormGroup= new FormGroup({
    name: new FormControl("",[Validators.required , Validators.maxLength(10), Validators.minLength(3)]),
    age: new FormControl("",[Validators.required , Validators.max(100), Validators.min(0)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phone:new FormControl("",[Validators.required,Validators.max(9999999999), Validators.min(100000000)]),
      address:new FormGroup({
        hno: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl("",[Validators.required , Validators.max(100000), Validators.min(999999)])
      }),
    cards:new FormArray([]),
    type: new FormControl(),
    busfee: new FormControl(),
    hostalfee: new FormControl()
  })

  get cardFromArray(){
    return this.userForm.get('cards') as FormArray
  }

  add(){
    this.cardFromArray.push(
      new FormGroup({
        cardno: new FormControl(),
        expary: new FormControl(),
        cvv: new FormControl("",[Validators.required,Validators.max(100), Validators.min(999)])
      })
    )
  }


  deleteCard(i:number){
    this.cardFromArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }
}

