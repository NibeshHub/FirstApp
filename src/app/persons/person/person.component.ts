import { Component, OnInit } from '@angular/core';
import { Person } from '../../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
persons:Person[]=[
  new Person("Rakesh",26,9937242354,"Male")
];
  constructor() { }

  ngOnInit() {
  }

}
