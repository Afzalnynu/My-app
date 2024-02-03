import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  public students:any=[]
constructor(private _clientService:ClientService, private _router:Router){
  _clientService.getClientDetails().subscribe(
    (data:any)=>{
      this.students=data
      console.log(data)
    },
    (err:any)=>{

    }
  )
}
delete(name:any){
  this._clientService.deleteClientDetails(this.students.id).subscribe(
    (data:any)=>{
      alert("Delete Successfully")
    },
    (err:any)=>{
      alert("Internal Error occur")
    }
  )
}
edit(){
  this._router.navigateByUrl("/dashbard/edit-client")
}
}
