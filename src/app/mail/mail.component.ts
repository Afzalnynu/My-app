import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

public mails:any=[];
constructor(private _mailServic:MailService){
  _mailServic.getMail().subscribe(
    (data:any)=>{
      this.mails = data
    },
    (err:any)=>{
      alert("err");
    }
  )
}
 
}
