import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KycService } from 'src/app/shared/services/kyc.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomerRegistrationService } from 'src/app/shared/services/customer-registration.service';
import { ActivatedRoute } from '@angular/router';
import { Status, Registration, UserDocuments, DocType } from 'src/app/shared/entities/customer';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-customer-options',
  templateUrl: './customer-options.component.html',
  styleUrls: ['./customer-options.component.scss'],
})

export class CustomerOptionsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private kycService: KycService,
    private alertService: AlertService,
    private router: ActivatedRoute,
    private registrationService: CustomerRegistrationService,
  ) { }

  uploadForm = this.formBuilder.group({
    panNumber: ['', [Validators.required]],
    panImage: [null, [Validators.required]],
    aadharNumber: ['', [Validators.required]],
    aadharImage: [null, [Validators.required]],
    photo: [null, [Validators.required]]
  });

  photoUrl: string;
  request: Registration;
  userDocuments: UserDocuments[] = [];
  DOC_PATH = 'D:\\Test101\\';

  successAlert = {
    header: 'Registration Successful',
    subHeader: '',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  ngOnInit() {
    this.router.paramMap.subscribe((value) => {
      this.request = this.registrationService.findCustomer(+value.get('id'));
    });
  }

  submitUploadForm() {
    this.request.registrationStatus = this.registrationService.findRegistrationStatus(Status.DocumentUploaded);
    this.kycService.updateRegistrationStatus(this.request).subscribe();
    this.kycService.saveKycDetails(this.userDocuments).subscribe();
    this.kycService.uploadKYCData(this.uploadForm).subscribe((response: string) => {
      this.successAlert.subHeader = response;
      this.alertService.presentAlert(this.successAlert);
      this.uploadForm.reset();
      this.photoUrl = '';
    });
  }

  panUpload(event: HTMLInputEvent) {
    const file = event.target.files[0];
    this.uploadForm.patchValue({
      panImage: file
    });
    this.uploadForm.get('panImage').updateValueAndValidity();
    const userDocument = new UserDocuments();
    userDocument.userId = this.request.userDetails.id;
    userDocument.document = this.registrationService.findDocumentType(DocType.Pan);
    userDocument.documentNumber = this.uploadForm.controls.panNumber.value;
    userDocument.path = this.DOC_PATH;
    this.userDocuments.push(userDocument);
  }

  aadharUpload(event: HTMLInputEvent) {
    const file = event.target.files[0];
    this.uploadForm.patchValue({
      aadharImage: file
    });
    this.uploadForm.get('aadharImage').updateValueAndValidity();
    const userDocument = new UserDocuments();
    userDocument.userId = this.request.userDetails.id;
    userDocument.document = this.registrationService.findDocumentType(DocType.Aadhar);
    userDocument.documentNumber = this.uploadForm.controls.aadharNumber.value;
    userDocument.path = this.DOC_PATH;
    this.userDocuments.push(userDocument);
  }

  photoUpload(event: HTMLInputEvent) {
    const file = event.target.files[0];
    this.uploadForm.patchValue({
      photo: file
    });
    this.uploadForm.get('photo').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.photoUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
    const userDocument = new UserDocuments();
    userDocument.userId = this.request.userDetails.id;
    userDocument.document = this.registrationService.findDocumentType(DocType.Photo);
    userDocument.path = this.DOC_PATH;
    this.userDocuments.push(userDocument);
  }

}
