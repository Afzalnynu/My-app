import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTabelService {

  constructor(private _htppClient:HttpClient) {}

  getProductdata():Observable<any>{
    return this._htppClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/products")
  }
  

  deleteProductData(id:any):Observable<any>{
    return this._htppClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/products/"+id)
  }

}

