import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent {

  @Output() public bEvent:EventEmitter<boolean>=new EventEmitter();

create(){
this.bEvent.emit(true)
}

reset(){
this.bEvent.emit(false)
}
}
