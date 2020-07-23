import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerRegistrationService } from 'src/app/shared/services/customer-registration.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Branch, AccountType, Occupation, Education, Income, ResidentialStatus, Gender, MaritalStatus } from 'src/app/shared/entities/customer';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: CustomerRegistrationService,
    private alertService: AlertService
  ) { }

  customerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z ]*')]],
    lastName: ['', [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z ]*')]],
    emailId: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    contactNumber: ['', [Validators.required, Validators.pattern('^(\\d{3}[- .]?){2}\\d{4}$')]],
    addressLine1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ,-]*'), Validators.minLength(5)]],
    addressLine2: [''],
    dob: ['', [Validators.required]],
    religion: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    branchName: ['', [Validators.required]],
    accountType: ['', [Validators.required]],
    occupation: ['', [Validators.required]],
    education: ['', [Validators.required]],
    incomeRange: ['', [Validators.required]],
    residentialStatus: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    maritalStatus: ['', [Validators.required]]
  });

  branches: Branch[];
  accountTypes: AccountType[];
  occupations: Occupation[];
  graduations: Education[];
  incomeRange: Income[];
  residenceTypes: ResidentialStatus[];
  genders: Gender[];
  maritalStatus: MaritalStatus[];

  successAlert = {
    header: 'Registration Successful',
    subHeader: '',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  duplicateAlert = {
    header: 'Registration Failed',
    subHeader: 'You cannot request another account unless previous request is closed.',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  ngOnInit() {
   this.branches = this.registrationService.branches;
   this.accountTypes = this.registrationService.accountTypes;
   this.occupations = this.registrationService.occupations;
   this.graduations = this.registrationService.educations;
   this.incomeRange = this.registrationService.incomes;
   this.residenceTypes = this.registrationService.residentialStatus;
   this.genders = this.registrationService.genders;
   this.maritalStatus = this.registrationService.maritalStatus;
   }

  customerFormSubmit() {
    this.registrationService.registerCustomer(this.customerForm).subscribe(
      (data: string) => {
        if (data === 'Duplicate Registration') {
          this.alertService.presentAlert(this.duplicateAlert);
        } else {
          this.successAlert.subHeader = data;
          this.alertService.presentAlert(this.successAlert);
        }
        this.customerForm.reset();
      }
    );
  }

}
