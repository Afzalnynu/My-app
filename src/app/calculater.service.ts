import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculaterService {

  constructor() { }

  public result:BehaviorSubject<number>=new BehaviorSubject(0);
  getValue(){
     return this.result
  }
  setValue(data:number){
     this.result.next(data)
  }
}
