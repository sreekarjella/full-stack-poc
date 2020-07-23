import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from '../entities/customer';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  notifyApproval(request: Registration): Observable<string> {
    return this.httpClient.post(environment.sendEmail, request, {responseType: 'text'}).pipe(
      map((response: string) => {
        console.log(response);
        return response;
      })
    );
  }
}
