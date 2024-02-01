import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-forms',
  templateUrl: './student-forms.component.html',
  styleUrls: ['./student-forms.component.css']
})
export class StudentFormsComponent {
constructor(){}
public studentForm:FormGroup= new FormGroup({
  name: new FormControl(),
  class: new FormControl(),
  fatherName: new FormControl(),
  email: new FormControl(),
  dob: new FormControl()
  
})
submit(){
  console.log(this.studentForm.value)
}
}



