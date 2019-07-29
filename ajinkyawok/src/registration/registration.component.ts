import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { RegistrationService } from 'src/app/shared/registration.service';
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Registration } from 'src/app/shared/registration.model';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
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


  /* onSubmit(form:NgForm)
   {
     this.insertRecord(form);
   }
 insertRecord(form: NgForm){
   this.service.postRegistration(form.value).subscribe(res =>{
     this.resetForm();
   })
 }*/
  /*checkMessage()
  {
    console.log("pohchlo");
    this.route.navigate(['/signup']);
  }*/
  insertMethod() {
    console.log("InsrtMethod:-" + JSON.stringify(this.reg));
    this.service.postRegistration(this.reg).subscribe();
    // this.service.getAllUser().subscribe((r: Registration[]) => {
    //   console.log("log oninit:" + JSON.stringify(r));
    //   this.RegDetails = r;
    //});
   // this.route.navigate(['/signup']);
  }
    checkValidation(email)
    {
      this.RegDetails.forEach(element => {
        if(element.user_email==email.target.value){
          //email.target.invalid=true;
          alert("already registered...");
        }
        
      });

    }
    parseDate(dateString: string): Date {
      if (dateString) {
          return new Date(dateString);
      }
      return null;
  }

  
}

