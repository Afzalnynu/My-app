import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
public num1: number= 0;
public num2: number= 0;
public stg: string="Your BMI"

public result: any="";

calculate(){
  this.result="Your BMI: "+((this.num2/(this.num1*this.num1))*10000)
}
}
