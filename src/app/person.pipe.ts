import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person.model';

@Pipe({
  name: 'person',
  pure:false
})
export class PersonPipe implements PipeTransform {

  transform(person:Person[]): Person[] {
    if(person!=null){
      let addrname:string="";
      switch(person[0].gender){
        case "Male":addrname="Mr. "+person[0].name;break;
        case "Female":addrname="Mrs. "+person[0].name;break;
        default:person[0].name;
      }
    if(person[0].age>=18){
      person[0].message="Dear "+addrname+" Mob ******"+person[0].mobile.toString().substr(5,4)+" you are eligible for Marraige now."
    }
    else{
      person[0].message="Dear "+addrname+"Mob ******"+person[0].mobile.toString().substr(5,4)+" since you are only "+person[0].age+", you are not  eligible for Marraige now."
    }
    
    return person;
    }
    return ;
  }

}
