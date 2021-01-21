import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  firstname:string= "sUnny"
  lastname:string= "Singh"
  todaydate:any=new Date()
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
      "Sept", "Oct", "Nov", "Dec"];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
