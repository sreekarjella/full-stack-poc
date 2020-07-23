import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  authStatus = '';
  ngOnInit() {
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
      this.router.navigateByUrl('/customer');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
