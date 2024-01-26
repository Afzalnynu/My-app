import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public products:any=[]
constructor(private _flipkartService:FlipkartService){
  _flipkartService.getflipkart().subscribe(
    (data:any)=>{
      this.products=data
    },
    (err:any)=>{
      alert("Error is Found")
    }

  )
}
}
