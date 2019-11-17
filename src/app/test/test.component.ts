import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
incData=0;
decData=0;
  alert=false;
 
  
getWidth(){
  return this.incData+"%";
}
incD(){
  if(this.incData<100){
this.incData+=10;
  }
  else{
    this.alert=true;
  }
}

decD(){

if(this.incData>=0){
  this.incData-=10;
  this.alert=false;
}

}
  constructor() { }

  ngOnInit() {
  }

}
