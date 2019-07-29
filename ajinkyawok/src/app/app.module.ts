import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '../main/main.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { StaticnavbarComponent } from '../staticnavbar/staticnavbar.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginService } from './shared/login.service';
import {HttpClientModule} from "@angular/common/http";
import { NgForm, FormsModule } from "@angular/forms";

import { IndexComponent } from '../index/index.component';
import { CreateprofileComponent } from '../createprofile/createprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    StaticnavbarComponent,
    RegistrationComponent,
   
    IndexComponent,
    CreateprofileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
