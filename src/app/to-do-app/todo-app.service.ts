import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoAppService {

  

  public todoApp:BehaviorSubject<any> = new BehaviorSubject("");

  public todoApp1:BehaviorSubject<any>=new BehaviorSubject("");

  public todoApp2:BehaviorSubject<any>=new BehaviorSubject("")

  constructor() { }

  setvalue(data:any){
    this.todoApp.next(data)
  }

  getValue(){
    return this.todoApp.asObservable()
  }

  editdata(data:any){
    this.todoApp1.next(data)
  }

  editget(){
    return this.todoApp1.asObservable()
  }

  dataview(data:any){
    this.todoApp2.next(data)
  }

  getview(){
    return this.todoApp2.asObservable()
  }
}
