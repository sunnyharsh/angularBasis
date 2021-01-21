import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { routing } from './app-routing.module';
import { SqrtPipe } from './customPipe/sqrt.pipe';
import {StringAddPipe} from "./customPipe/stringConcat.pipe"
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PipeComponent } from './pipe/pipe.component';
import { NavComponent } from './nav/nav.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RxjsComponent } from './rxjs/rxjs.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    PipeComponent,
    NavComponent,
    DirectivesComponent,
    FormComponent,
    // pipe import 
    ReactiveFormComponent,
    SqrtPipe,
    StringAddPipe,
    RxjsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
