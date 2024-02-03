import { Component } from '@angular/core';
import { ProductTabelService } from '../product-tabel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
public productData:any=[];
constructor(private _productTabelService:ProductTabelService, private _router:Router){
  _productTabelService.getProductdata().subscribe(
    (data:any)=>{
      this.productData=data
    },
    (err:any)=>{
      alert("Internal Error Occured")
    }
  )
}


delete(id:string){
  this._productTabelService.deleteProductData(id).subscribe(
    (data:any)=>{
      alert("Data Deleted")
    },
    (err:any)=>{
      alert("Internal Error Occured")
    }
  )
}

edit(id:any){
  this._router.navigateByUrl("/dashbard/edit-product-tabel/"+id)
}

}