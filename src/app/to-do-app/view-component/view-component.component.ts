import { Component } from '@angular/core';
import { TodoAppService } from '../todo-app.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent {

  public view: any = {}

  constructor(private _todoAppService: TodoAppService) {
    _todoAppService.getview().subscribe(
      (data: any) => {
        if (data) {
          console.log(data)

          this.view = data
        }
      }

    )
  }
}
