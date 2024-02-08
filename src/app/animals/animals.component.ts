import { Component } from '@angular/core';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {

public animals:any=""
constructor(private _animalsServic:AnimalsService){

  _animalsServic.getAnimalDetails().subscribe(
    (data:any)=>{
      this.animals=data.entries
    },
    (err:any)=>{

    }
  )

}

}
