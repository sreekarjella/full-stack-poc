import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, mapTo } from 'rxjs/operators';
import * as moment from 'moment';

class AuthToken {
  token: string;
  expiresAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }


  logIn(userName: string, password: string): Observable<boolean> {
    const authDetails = {
      userName,
      password
    };
    return this.httpClient.post(environment.auth, authDetails).pipe(
      tap((token: AuthToken) => this.storeAuthDetails(userName, token)),
      mapTo(true)
    );
  }

  private storeAuthDetails(userName: string, token: AuthToken) {
    sessionStorage.setItem('user', userName);
    sessionStorage.setItem('token', token.token);
    sessionStorage.setItem('expires_at', JSON.stringify(token.expiresAt));
  }

  isLoggedIn(): boolean {
    const value = this.getTokenExpiration();
    return moment().isBefore(value);
  }

  isLoggedOut(): boolean {
    const value = this.isLoggedIn();
    return !value;
  }

  getTokenExpiration() {
    const data = sessionStorage.getItem('expires_at');
    return moment(JSON.parse(data));
  }

  logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('expires_at');
  }

}
