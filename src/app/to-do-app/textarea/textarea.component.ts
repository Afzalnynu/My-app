import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoAppService } from '../todo-app.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
constructor(private _todoAppService:TodoAppService){}



public todoform=new FormGroup({
  task:new FormControl(),
  time:new FormControl()
})

catch(data:boolean){
if(data){
console.log(this.todoform.value);

this._todoAppService.setvalue(this.todoform.value)
}
else{
this.todoform.reset()
}

this._todoAppService.editget().subscribe(
  (data:any)=>{
    this.todoform.patchValue(data)
  }
)
}

}
