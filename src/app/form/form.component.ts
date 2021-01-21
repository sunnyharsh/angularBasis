import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  topics:Array<string>=['angular', 'vue', 'react']
  userModel=new User("sunny kumar singh", "sunny@gmail.com", 5555555445, 'default',{city:"patna", street:"boring road"})
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(obj:Object){
    console.log(obj, "obj")
  }

}
