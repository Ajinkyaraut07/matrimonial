import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/shared/registration.model';
import { RegistrationService } from 'src/app/shared/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  RegDetails: Registration[];
  reg: Registration = new Registration();
  constructor(private service: RegistrationService,
    private route: Router) {

  }
  ngOnInit() {
  }

  checkValidation(lform)
  {
    this.RegDetails.forEach(element => {
      if((element.username==lform.username.target.value)&&(element.user_passward==lform.user_passward.target.value)){
        //email.target.invalid=true;
        alert("already registered...");
      }
      
    });

  }

}
