import { Injectable, ErrorHandler, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {


  constructor(
    @Inject(SplashScreen) public splashScreen: SplashScreen,
    private alertService: AlertService,
  ) { }

  errorConfig = {
    header: 'Oops!',
    subHeader: 'Unexpected error has occurred. Please try again',
    backdropDismiss: false,
    buttons: ['Okay']
  };

  handleError(error: Error | HttpErrorResponse): void {
    console.error(error);
    this.alertService.presentAlert(this.errorConfig);
  }

}
