import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles:any=[];
  public term:string=""
  public column:string=""
  public order:string=""
  public page:number=0


  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal service error")
      }
    )
  }
  delete(id:string){
    this._vehicleService.deleteVehicles(id).subscribe(
      (data:any)=>{
        alert("delete successfully")
      },
      (data:any)=>{
        alert("Internal Error Occur")
      }
    )
  }
  search(){
    this._vehicleService.getFilterVehiles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data
      },
      (data:any)=>{
        alert("Error is Occured")
      }
    )
  }
sort(){
  this._vehicleService.getSortVehiles(this.column,this.order).subscribe(
    (data:any)=>{
      this.vehicles=data
    },
    (err:any)=>{
      alert("Puka Chusuko Error Ochedi")
    }
  )
}
poginarion(){
  this._vehicleService.getpageVehiles(this.page).subscribe(
    (data:any)=>{
      this.vehicles= data
    },
    (err:any)=>{
      alert("Error Ochiendi Ra Puka Chusuko")
    }
  )
}
}
