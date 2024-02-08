import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratings-child',
  templateUrl: './ratings-child.component.html',
  styleUrls: ['./ratings-child.component.css']
})
export class RatingsChildComponent {

  @Input() public img:any=""
}
