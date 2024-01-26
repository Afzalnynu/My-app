import { Component } from '@angular/core';
import { PhotoesService } from '../photoes.service';

@Component({
  selector: 'app-photoes',
  templateUrl: './photoes.component.html',
  styleUrls: ['./photoes.component.css']
})
export class PhotoesComponent {

  public photoes:any=[]

  constructor(private _photoService:PhotoesService){

  _photoService.getPhotoes().subscribe(
    (data:any)=>{
      this.photoes = data.data.memes
    },
    (err:any)=>{
      alert("Internal Server Error")
    }
  )

}
}
