import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  public id:any=""

 constructor(private _accountsrevice:AccountsService, private _activatedRoute:ActivatedRoute ,private _router:Router){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      this.id=data.id
      _accountsrevice.getdata(data.id).subscribe(
        (data:any)=>{
          this.accountForm.patchValue(data);
        },
        (err:any)=>{
          alert("Error")
        }
      )
    }
  )
 }

  public accountForm:FormGroup=new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    profie_picture: new FormControl(),
    city: new FormControl(),
    account_number: new FormControl()
    
  })



 submit(){
  console.log(this.accountForm.value)
  if(this.id){
    this._accountsrevice.updataAccount(this.id,this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Update Completed")
        this._router.navigateByUrl("/dashbard/accounts")
      },
      (Err:any)=>{
        alert("Error")
      }
    )
  }
  else{
    this._accountsrevice.createAccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Uploded")
      },
      (err:any)=>{
        alert("Internal error")
      }
    )
  }
 }
}
