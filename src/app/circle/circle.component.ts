import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  public num1: number = 0;

  public result: any ="";
area(){
this.result="Area is: "+3.14*(this.num1*this.num1)
}
perameter(){
this.result="Perameter is: "+2*(3.14*this.num1);
}
}
