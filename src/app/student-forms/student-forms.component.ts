import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-forms',
  templateUrl: './student-forms.component.html',
  styleUrls: ['./student-forms.component.css']
})
export class StudentFormsComponent {

public id:string=""

constructor(private _studentServer:StudentsService, private _activatedRoute:ActivatedRoute, private _router:Router){
  _activatedRoute.params.subscribe(
    (data:any)=>{
          this.id=data.id
      _studentServer.getStudentDetail(data.id).subscribe(
        (data:any)=>{
          this.studentForm.patchValue(data);
        },
        (err:any)=>{
          alert("Error occur")
        }
      )
    }

  )
}
public studentForm:FormGroup= new FormGroup({
  name: new FormControl(),
  phone: new FormControl(),
  city: new FormControl(),
  fee: new FormControl(),
  image: new FormControl()
  
})
submit(){
  if(this.id){
    this._studentServer.UpdateStudentDetail(this.id,this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Updata Successfully")
        this._router.navigateByUrl("/dashbard/students")
      },
      (err:any)=>{
        alert("Error Occur")
      }
    )
  }
  else{
    this._studentServer.createSrudent(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Upload Successfully")
      },
      (err:any)=>{
        alert("Internal Error")
      }
      
    )
  }
}
}



