import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { DirectivesComponent } from './directives/directives.component';
import { ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component"
import { PipeComponent } from './pipe/pipe.component';
import { RxjsComponent } from './rxjs/rxjs.component';
const appRoutes:Routes=[
    {
        path:'',
        component: HomeComponent
    },
    {
      path:'pipe',
      component: PipeComponent
    },
    {
      path:'directive',
      component: DirectivesComponent
    },
    {
      path:'forms',
      component: FormComponent
    },
    {
      path:'reactiveForm',
      component: ReactiveFormComponent
    },
    {
      path:'rxjs',
      component: RxjsComponent
    },
];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);