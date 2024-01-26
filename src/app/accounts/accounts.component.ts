import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
public accounts:any=[];

constructor(private _accountServices:AccountsService){
  _accountServices.getAccount().subscribe(
    (data:any)=>{
      this.accounts=data
    },
    (arr:any)=>{
      alert("Data error occure")
    }
  )
}

}
