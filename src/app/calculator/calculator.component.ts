import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

result="";


calculate(n1:number,n2:number,fml:string){
  switch(fml){
case "add":this.result="Sum is "+ (n1+n2);
console.log("Addition");
break;
case "sub":  this.result="Sub is "+ (n1-n2);
break;
case "mul": this.result="Mul is "+ (n1*n2);
break;
case "div":    this.result="Div is "+ (n1/n2);
break;
case "clear":    this.result="";
break;
  }

}

  constructor() { }

  ngOnInit() {
  }

}
