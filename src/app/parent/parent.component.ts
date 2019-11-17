import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  a=10;
  parentB;
  getB(x){
    this.parentB=x;

  }

  constructor(private ms:MathService) { }

  ngOnInit() {
    console.log(this.ms.add(10,20));
   this.ms.getData().subscribe(function(s){
    console.log(s)
    })
  }

}
