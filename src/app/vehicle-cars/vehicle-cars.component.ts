import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-cars',
  templateUrl: './vehicle-cars.component.html',
  styleUrls: ['./vehicle-cars.component.css']
})
export class VehicleCarsComponent {
  constructor(private _vehicleService:VehicleService){}
  public vehicleForm:FormGroup=new FormGroup({
    Vehicle: new FormControl(),
    manufacturrer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  })
  submit(){
    console.log(this.vehicleForm);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Added Succefully")
      },
      (err:any)=>{
        alert("Internal Error Occure")
      }
    )
  }
}
