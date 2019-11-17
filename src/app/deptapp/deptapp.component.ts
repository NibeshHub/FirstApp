import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { Person } from '../person.model';


@Component({
  selector: 'app-deptapp',
  templateUrl: './deptapp.component.html',
  styleUrls: ['./deptapp.component.css']
})
export class DeptappComponent implements OnInit {
  onlistTable:boolean=false;
employees:Employee[]=[new Employee(1000,'Arvind','UI','Male',30,'India'),
                      new Employee(1001,'Ganga','UI','Male',24,'India'),
                      new Employee(1002,'Robert','AI','Male',34,'Usa'),
                      new Employee(1003,'Lui','Analysis','Female',24,'Uk'),
                      new Employee(1004,'Rabina','DS','Female',30,'India'),
                      new Employee(1005,'Seron','Iiot','Male',30,'Usa'),
                      new Employee(1006,'Suayun','Testing','Male',30,'Chaina'),
                      new Employee(1007,'Brian','Analysis','Male',30,'Usa'),
                      new Employee(1008,'Nibesh','Iiot','Male',25,'India'),
                      new Employee(1009,'Vertin','AI','Female',30,'Uk'),
                      new Employee(1010,'Chasuan','DS','Female',30,'Japan'),
                      new Employee(1011,'Hysung','DS','Male',32,'Japan'),
                      new Employee(1012,'Rakesh','UI','Male',28,'India'),
                      new Employee(1013,'John','Iiot','Male',34,'Usa')];
  displayEmployeeList:Employee[]=this.employees;
  
  myDeptMap=new Map();

  orderByNameAsc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }
  orderByNameDesc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA > nameB) //sort string ascending
              return -1 
          if (nameA < nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }

  orderByDeptAsc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.dept.toLowerCase(), nameB=b.dept.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }
  orderByCountryAsc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.country.toLowerCase(), nameB=b.country.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }
  orderByDeptDesc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.dept.toLowerCase(), nameB=b.dept.toLowerCase()
          if (nameA > nameB) //sort string ascending
              return -1 
          if (nameA < nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }

  orderByIdAsc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.id, nameB=b.id
          if (nameA < nameB) //sort string ascending
              return -1 
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }

  orderByIdDesc(employees:Employee[]){

    employees.sort(function(a, b){
          var nameA=a.id, nameB=b.id
          if (nameA > nameB) //sort string ascending
              return -1 
          if (nameA < nameB)
              return 1
          return 0 //default return value (no sorting)
      })
  }

  selectCountry(singleEmp:Employee,multiEmp:Employee[]){


    this.displayEmployeeList=[];
                  for(let countryEmployee of this.employees){
                    if(countryEmployee.country.toLowerCase()==singleEmp.country.toLowerCase()){
                      this.displayEmployeeList.push(countryEmployee);
                    }
                  }

  }

  filterStringProperty(property:string){
    
  }
  filterNumberProperty(person:Person[]){
    
  }

  showAs(value:boolean){
    this.onlistTable=value;
  }

  asGender(gender:string){
    switch(gender){
      case "male":this.displayEmployeeList=[];
                  for(let maleEmployee of this.employees){
                    if(maleEmployee.gender=="male"||maleEmployee.gender=="Male"){
                      this.displayEmployeeList.push(maleEmployee);
                    }
                  }break;
      case 'female':this.displayEmployeeList=[];
                    for(let maleEmployee of this.employees){
                        if(maleEmployee.gender=="female"||maleEmployee.gender=="Female"){
                             this.displayEmployeeList.push(maleEmployee);
                           }
                      }break;
      case 'all':this.displayEmployeeList=this.employees;
      break;
      default:this.displayEmployeeList=this.employees;
    }
  }

  getColor(employee:Employee){
    let rowcolor:string;


    switch(employee.country){
      case "India":rowcolor="DodgerBlue";
      break;
      case "Chaina":rowcolor="Violet";
      break;
      case "Usa":rowcolor="Tomato";
      break;
      case "Uk":rowcolor="MediumSeaGreen";
      break;
      case "Japan":rowcolor="Orange";
      break;
       default:rowcolor="Gray";
      
    }
    return rowcolor;
}

  constructor() { }

  ngOnInit() {
  }

}
