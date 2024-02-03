import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  public id:string=""
constructor(private _clientServic:ClientService, private _activatedRoute:ActivatedRoute){
_activatedRoute.params.subscribe(
  (data:any)=>{
    alert(data.id)
    this.id=data
  }
)
}
public _studentsForm:FormGroup=new FormGroup({
  name:new FormControl(),
  age: new FormControl(),
  gender: new FormControl(),
    adderss: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      zip: new FormControl(),
      country: new FormControl(),
    }),
  email: new FormControl(),
  phone: new FormControl(),
  gpa:new FormControl()
})
submit(){
  console.log(this._studentsForm)
  // alert("submit successfully")
  this._clientServic.postClientDetails(this.id,this._studentsForm.value).subscribe(
    (data:any)=>{
      alert("Uploade Successfully")
    },
    (err:any)=>{
      alert("Error Occured")
    }
  )
}
}
