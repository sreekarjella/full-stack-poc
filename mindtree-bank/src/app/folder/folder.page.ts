import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }

  userName = '';
  password = '';

  successAlert = {
    header: 'Logged in successfully',
    backdropDismiss: false,
    buttons: [
      {
        text: 'Okay',
        handler: () => {
          this.router.navigateByUrl('/admin');
        }
      }
    ]
  };

  errorAlert = {
    header: 'Wrong Credentials',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  ngOnInit() { }


  adminLogin() {
    this.authService.logIn(this.userName, this.password).subscribe((value: boolean) => {
      if (value) {
        this.alertService.presentAlert(this.successAlert);
      } else {
        this.alertService.presentAlert(this.errorAlert);
      }
    });
  }

}
