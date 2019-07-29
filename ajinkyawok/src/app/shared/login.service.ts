import { Injectable } from '@angular/core';
import { Login } from './login.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData : Login;
  readonly rootURL="http://localhost:1164/api"
  constructor( private http : HttpClient) { }

  postLogin(formData:Login){
   return this.http.post(this.rootURL+'/user_login',formData);
  }
}
