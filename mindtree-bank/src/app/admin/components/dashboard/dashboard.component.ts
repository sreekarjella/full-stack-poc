import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/shared/entities/customer';
import { CustomerRegistrationService } from 'src/app/shared/services/customer-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(
    private registrationService: CustomerRegistrationService,
    private router: Router
    ) { }

  allRequests: Registration[];

  ngOnInit() {
    this.allRequests = this.registrationService.registeredCustomers;
  }

  openRequest(requestId: number) {
    this.router.navigate(['admin/request', {id: requestId}]);
  }

}
