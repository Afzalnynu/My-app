import { Component } from '@angular/core';

@Component({
  selector: 'app-online-account',
  templateUrl: './online-account.component.html',
  styleUrls: ['./online-account.component.css']
})
export class OnlineAccountComponent {
public arr:number=12

button(){
  this.arr++
}
}
