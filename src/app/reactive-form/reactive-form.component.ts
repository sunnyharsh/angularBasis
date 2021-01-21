import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  counter:number;
  constructor() { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
      user_email: new FormControl(null, Validators.compose(
        [Validators.required, 
         Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])),
      password_group: new FormGroup({
            user_password: new FormControl(null, [Validators.required]),
            user_confirmPassword: new FormControl(null, [Validators.required]),
        	}),
      user_phone: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      user_gender: new FormControl('Male'),
      user_city: new FormControl('', Validators.compose([Validators.required])),
      mobiles:new FormArray([
       new FormControl('')
     ])
    });
  }
  get mobiles(){
    return this.signupForm.get('mobiles') as FormArray;
  }
  addNewMobile(){
    this.mobiles.push(new FormControl(''))
  }
  onSubmit(){
    this.signupForm.markAllAsTouched();
    this.counter=0;
    for(let mob of this.mobiles.controls){
      this.counter+=1
    }
  }
  removeMobile(index:number){
    this.mobiles.removeAt(index);
  }

}
