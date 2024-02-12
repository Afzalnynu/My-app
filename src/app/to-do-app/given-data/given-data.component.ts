import { Component } from '@angular/core';
import { TodoAppService } from '../todo-app.service';

@Component({
  selector: 'app-given-data',
  templateUrl: './given-data.component.html',
  styleUrls: ['./given-data.component.css']
})
export class GivenDataComponent {
  public comment: any = {}
  public comments: any = []
  constructor(private _todoAppService: TodoAppService) {
    _todoAppService.getValue().subscribe(
      (data: any) => {
        if (data) {
          this.comment = data
          this.comments.push(this.comment)
          console.log(this.comments)
        }
      }
    )
  }
  delete(i: number) {
    this.comments.splice(i, 1)
  }
  edit(data: any) {
    this._todoAppService.editdata(data)
  }

  view(data: any) {
    alert("View working")
    this._todoAppService.dataview(data)
    console.log(data)
  }

}
