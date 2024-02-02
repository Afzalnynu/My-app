import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-cars',
  templateUrl: './vehicle-cars.component.html',
  styleUrls: ['./vehicle-cars.component.css']
})
export class VehicleCarsComponent {
  public id:string=""
  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id

        if(this.id){
          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.vehicleForm.patchValue(data);
            },
            (err:any)=>{
              alert("Internal Error Occure")
            }
            )
        }
      }
    )

  }

  public vehicleForm:FormGroup=new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  })

  submit(){
    if(this.id){
      // update
      this._vehicleService.UpdateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Updated Successfully")
        },
        (err:any)=>{
          alert("Internal Error")
        }
      )

    }

    else{
      // create
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("Added Succefully")
        },
        (err:any)=>{
          alert("Internal Error Occure")
        }
      )

    }

    // console.log(this.vehicleForm);
  }
}
