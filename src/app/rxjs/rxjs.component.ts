import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let laptop=new Promise((reslove, reject)=>{
      reslove("promise is resolve...")
    })
    laptop.then(res=>{
      console.log(res, "==res")
    })
  }
  myFunction(){
    console.log("my function")
  }
}
