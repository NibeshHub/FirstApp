export class Employee{
    public name:string;
    public id:number;
    public dept:string;
    public gender:string;
    public age:number;
    public country:string;
    constructor(id:number,name:string,dept:string,gender:string,age:number,country:string){
        this.name=name;
        this.id=id;
        this.dept=dept;
        this.gender=gender;
        this.age=age;
        this.country=country;
    }
}