import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isTrue:boolean=true;
  heroes:Array<any>=[];
  isSpecial:boolean=true
  currentStyles:object= {};

  constructor() {
    this.heroes=[{name:"sunny"},{name:"amit"}]
   }

   setCurrentStyles() {
    this.currentStyles = {
      'font-style': 'italic' ,
      'font-weight': 'bold',
      'font-size':  '24px'
    };
  }
  ngOnInit(): void {
    this.setCurrentStyles()
  }

}
