import { Component } from '@angular/core';
import { ProductTabelService } from '../product-tabel.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
public productData:any=[];
constructor(private _productTabelService:ProductTabelService){
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

}