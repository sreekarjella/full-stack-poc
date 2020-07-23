import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerRegistrationService } from 'src/app/shared/services/customer-registration.service';
import { Status, Registration } from 'src/app/shared/entities/customer';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private registrationService: CustomerRegistrationService,
    private alertService: AlertService,
    private route: Router,
    private authService: AuthService,
    private adminService: AdminService
  ) { }

  request: Registration;
  authStatus = '';

  successAlert = {
    header: 'Request Approved',
    subHeader: '',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  ngOnInit() {
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

  approveRequest() {
    this.request.registrationStatus = this.registrationService.findRegistrationStatus(Status.Approved);
    this.adminService.notifyApproval(this.request).subscribe();
    this.registrationService.updateRequest(this.request).subscribe((data: string) => {
      this.successAlert.subHeader = data;
      this.alertService.presentAlert(this.successAlert);
    });
  }

  rejectRequest() {
    this.request.registrationStatus = this.registrationService.findRegistrationStatus(Status.Rejected);
    this.registrationService.updateRequest(this.request).subscribe((data: string) => {
      this.successAlert.header = 'Request Rejected';
      this.successAlert.subHeader = data;
      this.alertService.presentAlert(this.successAlert);
    });
  }

}
