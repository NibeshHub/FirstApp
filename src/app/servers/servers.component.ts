import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  // selector: '[app-servers]',
selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  countrycase=[{name:"Rakesh",age:27,country:"USA"},{name:"Ganga",age:25,country:"UK"},{name:"Gopal",age:37,country:"Austrelia"},{name:"Nibesh",age:27,country:"Tokyo"}]
  inputcase;
  serverName="";
  nowServer="";
  serverCreated=false;
  styleExp="50px"
  names=["Rakesh","Ganga","Nibesh"]
  createServer(){
    this.serverCreated=!this.serverCreated;
    console.log("Server created");
    this.nowServer=this.serverName;
   }
   
  onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
  }


getColor(){
  return this.serverName;
}
    constructor() {
    
   }

  ngOnInit() {
    
  }

}
