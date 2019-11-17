import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['achild'],
  outputs:['bevent']
})
export class ChildComponent implements OnInit {
  b=20;
  public bevent=new EventEmitter();
  sendB(){
    this.bevent.emit(this.b);
  }

  constructor() { }

  ngOnInit() {
  }

}
