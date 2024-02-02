import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public baseUrl:any="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private _httpClient:HttpClient) { 
  }

  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  getVehicle(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }

  deleteVehicles(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id)
  }
  getFilterVehiles(term:string){
    return this._httpClient.get(this.baseUrl+"?filter="+term)
  }
  getSortVehiles(order:string,column:string){
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order)
  }

  getpageVehiles(page:number){
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+page)
  }

  createVehicle(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"",data);
  }

  UpdateVehicle(id:string, data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }

  
}
