import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerRegistrationService } from 'src/app/shared/services/customer-registration.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Registration, Branch } from 'src/app/shared/entities/customer';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss'],
})
export class AccountCreationComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private registrationService: CustomerRegistrationService,
    private alertService: AlertService,
    private route: Router,
    private authService: AuthService
  ) { }

  request: Registration;
  authStatus = '';
  accountNumber = 1234567890;
  ifscCode = 'IFSC001';
  micrCode = 'MICR001';
  branchAddress = 'Kingeri';
  branches: Branch[];
  branch: Branch;

  successAlert = {
    header: 'Successfully emailed customer',
    subHeader: '',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  @ViewChild('content', { read: ElementRef }) content: ElementRef;

  ngOnInit() {
    this.branches = this.registrationService.branches;
    this.router.paramMap.subscribe((value) => {
      this.request = this.registrationService.findCustomer(+value.get('id'));
    });
    if (this.authService.isLoggedIn()) {
      this.authStatus = 'Logout';
    } else {
      this.authStatus = 'Login';
    }
  }

  loginRoute() {
    if (this.authStatus === 'Logout') {
      this.authService.logOut();
      this.ngOnInit();
      this.route.navigateByUrl('/customer');
    } else {
      this.route.navigateByUrl('/login');
    }
  }

  saveData() {
    const content = this.content.nativeElement;
    const doc = new jsPDF();
    const elementHandlers =
    {
      '#editor'(element, renderer) {
        return true;
      }
    };
    doc.fromHTML(content.innerHTML, 15, 15, {

      width: 190,
      elementHandlers
    });

    doc.save('test.pdf');
  }

  emailCustomer() {
    this.request.branch = this.branch;
    this.registrationService.updateRequest(this.request).subscribe();
    this.registrationService.accountCreationEmail(this.request).subscribe((response: string) => {
      this.alertService.presentAlert(this.successAlert);
    });
  }

}
