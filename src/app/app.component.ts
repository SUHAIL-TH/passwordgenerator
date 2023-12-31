import { Component, OnInit } from '@angular/core';
import { ObservableService } from './service/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service:ObservableService){}
 ngOnInit() {
  this.service.call().subscribe((res)=>{
    console.log(res)
  })

  
 }
 passwordlength:number=12
 small:boolean=false
 capital:boolean=false
 number:boolean=false
 special:boolean=false
 passsmall:string='abcdefghijklmnopqrstuvwxyz'
 passcapital:string='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 passnumber:string="123456789"
 passspecial:string="!@#$%&*"
 newpassword:string=""

 generate(){
  let validcharacter=''
  if(this.small){
    validcharacter +=this.passsmall
  }
  if(this.capital){
    validcharacter+=this.passcapital
  }
  if(this.number){
    validcharacter+=this.passnumber
  }
  if(this.special){
    validcharacter+=this.passspecial
  }
  if(validcharacter.length===0){
    alert("Please select any of the character type")
  }
  console.log(validcharacter);
  
  let password=""
 for(let i=0;i<this.passwordlength;i++){
  const randomIndex = Math.floor(Math.random() *validcharacter.length);
   password+=validcharacter.charAt(randomIndex) 
 }
 this.newpassword=password
 }
 copy(){
  const passinput=document.getElementById("passwordgenerated") as HTMLInputElement
  if(passinput){
    passinput.select();
    document.execCommand('copy');
  }
 }

}
