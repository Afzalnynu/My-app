import { Component } from '@angular/core';
import { CalculaterService } from '../calculater.service';

@Component({
  selector: 'app-input-calculater',
  templateUrl: './input-calculater.component.html',
  styleUrls: ['./input-calculater.component.css']
})
export class InputCalculaterComponent {
public num1:number=0
public num2:number=0
// public result:number=0

constructor(private _calculaterService:CalculaterService){}

catch(value:number){
  if(value===1){
     this._calculaterService.setValue(this.num1+this.num2)
  }

  else if(value===2){
    this._calculaterService.setValue(this.num1-this.num2)
  }

  else if(value===3){
    this._calculaterService.setValue(this.num1*this.num2)
  }

  else{
    this._calculaterService.setValue(this.num1/this.num2)
  }
}
}
