import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  public num1: number = 0;
  public num2: number = 0;

  public result: any ="";

  area(){
    this.result="Area is: "+this.num1*this.num2
  }
  perameter(){
    this.result="Perameter is: "+(this.num1+this.num2)*2
  }
}
