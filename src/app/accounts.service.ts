import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpService: HttpClient) { }
  getAccount(): Observable<any> {
    return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  deleteAccount(id:string): Observable<any>{
    return this._httpService.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
    }

    getFilterAccount(term:string): Observable<any>{
      return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+ term)
      }

    getSortedAccount(column:string, order:string): Observable<any>{
      return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
    }

    getPageAccount(page:number): Observable<any>{
      return this._httpService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page)
    }

    createAccount(data:any):Observable<any>{
      return this._httpService.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
    }
  }

