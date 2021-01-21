import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  heros:any;
  name:string
  childCurrentValue:string;
  constructor(){
  this.heros=["spiderman","superman", "iron man"]
  this.name="sunny"
  }
  getOutputVal(data:string){
    console.log(data, "data")
  }
}
