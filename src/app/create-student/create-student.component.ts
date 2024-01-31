import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
 constructor(public _studentService:StudentsService){}

 public studentForm:FormGroup=new FormGroup({
  image: new FormControl(),
  name: new FormControl(),
  id: new FormControl(),
  phone: new FormControl(),
  city: new FormControl(),
  fee: new FormControl()
 })

submit(){
  this._studentService.createSrudent(this.studentForm.value).subscribe(
    (data:any)=>{
      alert("Uploaded")
    },
    (err:any)=>{
      alert("Error")
    }
  )
}
}
