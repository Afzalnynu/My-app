import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
public markes: any=[
  {name:"a",sub:"English",markes:"50",result:"Pass"},
  {name:"b",sub:"Maths",markes:"45",result:"Pass"},
  {name:"c",sub:"sci",markes:"30",result:"Fail"},
  {name:"d",sub:"Tel",markes:"32",result:"Fail"},
  {name:"f",sub:"sci",markes:"30",result:"Fail"}
]
}
