import { Component, OnInit, Input } from '@angular/core';
import { Status, Registration, UserDocuments } from 'src/app/shared/entities/customer';
import { CustomerRegistrationService } from 'src/app/shared/services/customer-registration.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-validation',
  templateUrl: './document-validation.component.html',
  styleUrls: ['./document-validation.component.scss'],
})
export class DocumentValidationComponent implements OnInit {

  constructor(
    private registrationService: CustomerRegistrationService,
    private alertService: AlertService,
    private router: Router
  ) { }

  @Input() request: Registration;
  userDocs: UserDocuments[];

  reject = {
    header: 'Account rejected',
    subHeader: '',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  ngOnInit() {
    this.userDocs = this.registrationService.findUserDocument(this.request.userDetails.id);
  }

  getDocumentNumber(type: string): string {
    let docNumber = '';
    this.userDocs.forEach((doc) => {
      if (doc.document.documentType === type) {
        docNumber = doc.documentNumber;
      }
    });
    return docNumber;
  }

  rejectAccount() {
    this.request.registrationStatus = this.registrationService.findRegistrationStatus(Status.Rejected);
    this.registrationService.updateRequest(this.request).subscribe((value: string) => {
      this.alertService.presentAlert(this.reject);
    });
  }

  approveAccount() {
    this.request.registrationStatus = this.registrationService.findRegistrationStatus(Status.AccountCreated);
    this.registrationService.updateRequest(this.request).subscribe((value: string) => {
      console.log(value);
      this.router.navigate(['admin/request/account-creation', {id: this.request.id}]);
    });
  }

}
