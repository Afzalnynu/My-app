import { literalMap } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
public input:string="";
public arr:string[]=['naveen','vasu']

submit(){
  this.arr.push(this.input)
}
delect(a:number){
  this.arr.splice(a
  ,1)
}
}
