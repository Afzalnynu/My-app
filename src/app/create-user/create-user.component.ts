import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  constructor(){}
  public userForm:FormGroup= new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    phone:new FormControl(),
      address:new FormGroup({
        hno: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl()
      }),
    cards:new FormArray([])
  })

  get cardFromArray(){
    return this.userForm.get('cards') as FormArray
  }

  add(){
    this.cardFromArray.push(
      new FormGroup({
        cardno: new FormControl(),
        expary: new FormControl(),
        cvv: new FormControl()
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

