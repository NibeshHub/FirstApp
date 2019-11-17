import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
persons:Person[]=[
  new Person("Rakesh",26,9937242354,"Male"),
  new Person("Ganga",23,9937242354,"Male"),
  new Person("Rajesh",17,9234242354,"Male"),
  new Person("Rajeshree",15,9234242354,"Female")
];
singleperson:Person[];
  constructor() { }

  ngOnInit() {
  }
 onsetPerson(person:Person){
this.singleperson=[person];
}

}
