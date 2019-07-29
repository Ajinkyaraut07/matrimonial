import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaticnavbarComponent} from '../staticnavbar/staticnavbar.component';
import{MainComponent} from '../main/main.component';
import {RegistrationComponent} from '../registration/registration.component';
import { from } from 'rxjs';
import { IndexComponent } from 'src/index/index.component';
import { CreateprofileComponent } from 'src/createprofile/createprofile.component';


const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"signup",component:RegistrationComponent},
  {path:"main",component:MainComponent},
 { path:"index",component:IndexComponent},
{path:"createprofile",component:CreateprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
