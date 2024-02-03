import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private _httpClient:HttpClient) { }
  getClientDetails():Observable<any>{
    return this._httpClient.get("https://freetestapi.com/api/v1/students")
  }
  deleteClientDetails(id:any):Observable<any>{
    return this._httpClient.delete("https://freetestapi.com/api/v1/students/"+id)
  }

  getClientDetail(id:any):Observable<any>{
    return this._httpClient.get("https://freetestapi.com/api/v1/students/"+id)
  }
  postClientDetails(id:any,data:any):Observable<any>{
    return this._httpClient.post("https://freetestapi.com/api/v1/students/"+id,data)
  }
}