import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
public products:any=[
  {Sno:"1",ProductName:"Pen",Price:10,Rating:3,FreeDelivery:"true", Action:"Delete"},
  {Sno:"2",ProductName:"Phone",Price:15000,Rating:5,FreeDelivery:"true", Action:"Delete"},
  {Sno:"3",ProductName:"Shirt",Price:800,Rating:4,FreeDelivery:"true", Action:"Delete"},
  {Sno:"4",ProductName:"cap",Price:200,Rating:1,FreeDelivery:"false", Action:"Delete"},
  {Sno:"5",ProductName:"Shoes",Price:950,Rating:2,FreeDelivery:"true", Action:"Delete"},
  {Sno:"6",ProductName:"TV",Price:24999,Rating:3.5,FreeDelivery:"true", Action:"Delete"}
]
public pro:any={ProductName:""}


public name:string=""
filter(){
  this.products=this.products.filter((product:any)=>product.ProductName.includes(this.name))
}
price(){
  this.products=this.products.sort((a:any,b:any)=>a.Price-b.Price)
}

high(){
  this.products=this.products.sort((a:any,b:any)=>b.Price-a.Price)
}

low(){
  this.products=this.products.sort((a:any,b:any)=>a.Rating-b.Rating)
}
rating(){
  this.products=this.products.sort((a:any,b:any)=>b.Rating-a.Rating)
}
discount(){
  this.products=this.products.map((product:any)=>{
    product.Price = product.Price/2;
    return product;
  })
}
afterDiscount(){
  this.products=this.products.map((product:any)=>{
    product.Price=product.Price+30;
    return product;
  })
}

free(){
  this.products=this.products.filter((product:any)=>product.FreeDelivery == "true")
}

total(){

  alert(this.products=this.products.reduce((sum:any,el:any)=>{
       return sum+el.Price
  },0))
}

items(){
  alert(this.products.length);
}
addCart(){
 this.products.push({...this.pro});
}
danger(i:number){
  this.products.splice(i,1);
}
}


