import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
public numbers: number[]=[10,20,30,40]
public states:string[]=["Andhra","TS","Bangulur"]
public user: any=[
  {name:"abc", age:22,phone:98987},
  {name:"hjk", age:22,phone:98987},
  {name:"abc", age:22,phone:98987},
  {name:"abc", age:22,phone:98987},
]
}




