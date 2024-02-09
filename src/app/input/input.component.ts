import { Component, Input } from '@angular/core';
import { CalculaterService } from '../calculater.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  public result:number=0;

constructor(private _calculaterService:CalculaterService){
  _calculaterService.getValue().subscribe(
    (data:number)=>{
        this.result=data;
    }
  )
}

}
