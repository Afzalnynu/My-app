import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  public students:any=[]
  public filter:any=""
  public column:any="name"
  public order:any="asc"
  public page:any=""

  constructor(private _studentServer:StudentsService, private _router:Router ){
  _studentServer.getStudentDetails().subscribe(
    (data:any)=>{
      this.students=data
    },
    (err:any)=>{
      alert("Erroe Occured in Internal")
    }
  )
}
delete(id:any){
  this._studentServer.deleteStudent(id).subscribe(
    (data:any)=>{
      alert("Deleted Successfuly")
    },
    (err:any)=>{
      alert("Internal Error Occured")
    }
  )
}
Search(){
    this._studentServer.getFiltureStudents(this.filter).subscribe(
      (data:any)=>{
        this.students=data
      },
      (data:any)=>{
        alert("Internal Error Occured")
      }
    )
}
sorting(){
  this._studentServer.getSortStudent(this.column,this.order).subscribe(
    (data:any)=>{
      this.students=data
    },
    (err:any)=>{
      alert("Internal Error Occured")
    }
  )
}
pages(){
  this._studentServer.getStudentPage(this.page).subscribe(
    (data:any)=>{
      this.students=data
    },
    (data:any)=>{
      alert("Internal Error Occured")
    }
  )
}

edit(id:any){
  this._router.navigateByUrl("/dashbard/edit-student/"+id);
}
}
