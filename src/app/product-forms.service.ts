import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFormsService {

  constructor(private _httpClient:HttpClient) { }

  postdataDetails(data:any):Observable<any>{
    return this._httpClient.post("https://62abe711bd0e5d29af16f450.mockapi.io/products",data)
  }

  getProduct(id:any):Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/products/"+id)
  }
  
  updateProduct(id:any,data:any):Observable<any>{
    return this._httpClient.put("https://62abe711bd0e5d29af16f450.mockapi.io/products/"+id,data)
  }
}
