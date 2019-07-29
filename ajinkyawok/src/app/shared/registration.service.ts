import { Injectable } from '@angular/core';
import { Registration } from './registration.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  formData : Registration;
  readonly rootURL="http://localhost:60709/api"
  constructor(private http: HttpClient) { }

   postRegistration(formData:Registration){
    console.log(`user info:- ${JSON.stringify(formData)}`);

  return this.http.post(this.rootURL+'/registrations',formData);
   }
 
  getAllUser() {
    return this.http.get<Registration[]>(this.rootURL + "/registrations");
  }


}
