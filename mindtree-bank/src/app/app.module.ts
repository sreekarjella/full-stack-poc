import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalHttpInterceptorService } from './shared/services/global-http-interceptor.service';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { CustomerRegistrationService } from './shared/services/customer-registration.service';

export function metaDataAppInit(registrationService: CustomerRegistrationService) {
  return (): Promise<any> => {
    return registrationService.metaDataInitialization().toPromise();
  };
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {
      provide: APP_INITIALIZER,
      useFactory: metaDataAppInit,
      deps: [CustomerRegistrationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
