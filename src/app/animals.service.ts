import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private _httpClient:HttpClient) { }
  getAnimalDetails():Observable<any>{
    return this._httpClient.get("https://api.publicapis.org/entries")
  }

  deleteAnimalDetails():Observable<any>{
    return this._httpClient.delete("https://api.publicapis.org/entries/")
  }
}

