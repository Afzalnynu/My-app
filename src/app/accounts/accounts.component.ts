import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { subscribeOn } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
public accounts:any=[];
public term:string=""
public coloum:string=""
public order:string=""
public page:number=0

constructor(private _accountServices:AccountsService, private _router:Router){
  _accountServices.getAccount().subscribe(
    (data:any)=>{
      this.accounts=data
    },
    (arr:any)=>{
      alert("Data error occure")
    }
  )
}
delete(id:string){
 this._accountServices.deleteAccount(id).subscribe(
  (data:any)=>{
    alert(data.account_name+"Deleted Succesfully")
    location.reload()
  },
  (err:any)=>{
    alert("Internal Error Located")
  }
 )
}
filter(){
  this._accountServices.getFilterAccount(this.term).subscribe(
    (data:any)=>{
      this.accounts=data
    },
    (err:any)=>{

    }
  )
}
sort(){
  this._accountServices.getSortedAccount(this.coloum,this.order).subscribe(
    (data:any)=>{
      this.accounts=data
    },
    (data:any)=>{
      alert("Error")
    }
  )
}
pagination(){
  this._accountServices.getPageAccount(this.page).subscribe(
    (data:any)=>{
      this.accounts=data
    },
    (data:any)=>{
      alert("Error")
    }
  )
}

edit(id:string){
  this._router.navigateByUrl("/dashbard/edit-account/"+id);
}

}

