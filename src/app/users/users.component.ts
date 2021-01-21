import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Input() heros:string;
@Input() name:string;
@Output() outPutToParent =new EventEmitter<any>()

users:any
  constructor() { 
    this.users=["sunny", "raushan"]
  }

  ngOnInit(): void {
    console.log("heros", this.heros)
  }
  NotificationToParent(){
    this.outPutToParent.emit([{name:"sunny"}])
  }

}
