import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  public acts:any={}

  refresh(){
    this._activityService.getActivity().subscribe(
      (data:any)=>{
        this.acts = data
      },
      (err:any)=>{
        alert("Error")
      }
    )
  }
  
constructor(private _activityService:ActivityService){
  _activityService.getActivity().subscribe(
    (data:any)=>{
      this.acts = data
    },
    (err:any)=>{
      alert("Error")
    }
  )
}
}
