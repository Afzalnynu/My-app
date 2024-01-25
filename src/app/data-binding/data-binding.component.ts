import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
public name: string=" Afzal"
public age: number=22
public ages: number[]=[1,2,2,3]
public names: string[]=["Afzal, Nynu"]
public user:any = {name:"abc",age:22}

public phone: string="+91 "

submit(){
  alert("Submit clicked")
}
key(){
  alert("keyPressed")
}
}
