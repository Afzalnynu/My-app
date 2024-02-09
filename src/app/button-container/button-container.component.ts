import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent {

  @Output() public bEvent:EventEmitter<number> = new EventEmitter();

  add(){
    this.bEvent.emit(1)
  }
  sub(){
    this.bEvent.emit(2)
  }
  mul(){
    this.bEvent.emit(3)
  }
  div(){
    this.bEvent.emit(4)
  }

}
