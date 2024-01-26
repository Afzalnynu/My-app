import { Component } from '@angular/core';

@Component({
  selector: 'app-employ-table',
  templateUrl: './employ-table.component.html',
  styleUrls: ['./employ-table.component.css']
})
export class EmployTableComponent {
public empolyee:any=[
  {name:"Afzal",Company:"TCS",Experiences:"3",Package:110000,WorkingEmployee:"true"},
  {name:"Mani",Company:"wipro",Experiences:"4",Package:130000,WorkingEmployee:"true"},
  {name:"Nethaji",Company:"Revolt",Experiences:"5",Package:150000,WorkingEmployee:"false"},
  {name:"Vasu",Company:"Amazon",Experiences:"3",Package:110000,WorkingEmployee:"true"},
  {name:"Afzal",Company:"Flipkart",Experiences:"7",Package:140000,WorkingEmployee:"false"},
  {name:"Afzal",Company:"Youtube",Experiences:"1",Package:410000,WorkingEmployee:"true"},
  {name:"Afzal",Company:"Bolt",Experiences:"9",Package:185000,WorkingEmployee:"false"},
  {name:"Afzal",Company:"google",Experiences:"4",Package:100000,WorkingEmployee:"true"},
  {name:"Afzal",Company:"TCS",Experiences:"8",Package:120000,WorkingEmployee:"false"},
  {name:"Afzal",Company:"TCS",Experiences:"1",Package:350000,WorkingEmployee:"true"},
]
public emp:any={name:"",Company:"",Experiences:"",Package:0,WorkingEmployee:""}

exp_high()
{
  this.empolyee=this.empolyee.sort((a:any,b:any)=>b.Experiences - a.Experiences)
}
exp_low()
{
  this.empolyee=this.empolyee.sort((a:any,b:any)=>a.Experiences - b.Experiences)
}
pack_high(){
  this.empolyee=this.empolyee.sort((a:any,b:any)=>a.Package - b.Package)
}
pack_low(){
  this.empolyee=this.empolyee.sort((a:any,b:any)=>b.Package - a.Package)
}
hike(){
  this.empolyee=this.empolyee.map((pack:any)=>{
    // pack.hike=((this.empolyee.Package/100)*20)+this.empolyee.Package
    // return pack.hike
    return {...pack,Package:(pack.Package)+((20/100)*pack.Package)}
  })
}
bonus(){
  this.empolyee=this.empolyee.map((bon:any)=>{
    return {...bon,Package:(bon.Package+50000)}
  } 
  )
}

junior(){
  this.empolyee=this.empolyee.filter((a:any)=>a.Experiences < 5)
}

senior(){
  this.empolyee=this.empolyee.filter((a:any)=>a.Experiences > 5)
}
ctc(){
  alert(
    this.empolyee=this.empolyee.reduce(
      (sum:any,a:any)=>{
        return sum+a.Package
      } 
    ,0)
  )
  }
  
total(){
  alert(this.empolyee.length)
}
push(){
  this.empolyee.push({...this.emp})
}
}
