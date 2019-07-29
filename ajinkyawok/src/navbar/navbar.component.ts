import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/shared/registration.model';
import { RegistrationService } from 'src/app/shared/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  RegDetails: Registration[];
  reg: Registration = new Registration();
  constructor(private service: RegistrationService,
    private route: Router) {

  }
  ngOnInit() {
    this.service.getAllUser().subscribe((r: Registration[]) => {
      console.log("log oninit:" + JSON.stringify(r));
      this.RegDetails = r;
    });
  }
  loginCheckMethod(ev,lform)
  {
    this.RegDetails.forEach(element => {

      console.log("inside checkvalid..."+JSON.stringify(lform.value));
      if((element.username==lform.value.username)&&(element.user_passward==lform.value.user_passward)){
        //email.target.invalid=true;
        console.log("in inside checkvalid...");
        alert("Login successfully...");
        this.route.navigate(['/index']);
      }
      
      
    });
  }
}
