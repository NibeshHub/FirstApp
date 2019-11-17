import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor(private hp:HttpClient) { }
  public add(x,y){
    return x+y;
  }
  public getData(){
    return  this.hp.get("https://jsonplaceholder.typicode.com/posts");
  }
}
