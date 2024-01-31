import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.css']
})
export class DashbardComponent {
  constructor(private _router:Router){}
  logout(){
    localStorage.removeItem("token")
    this._router.navigateByUrl("/login")
  }
}
