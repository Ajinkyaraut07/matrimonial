import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Registration } from 'src/app/shared/registration.model';
import { RegistrationService } from 'src/app/shared/registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
      console.log("inside checkvalid...");
      if((element.username==lform.username.target.value)&&(element.user_passward==lform.user_passward.target.value)){
        //email.target.invalid=true;
        
        alert("already registered...");
      }
      
    });
  }
}
