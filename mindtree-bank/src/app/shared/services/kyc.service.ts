import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Registration, UserDocuments } from '../entities/customer';

@Injectable({
  providedIn: 'root'
})
export class KycService {

  constructor(private httpClient: HttpClient) { }

  uploadKYCData(uploadForm: FormGroup): Observable<string> {
    const formData = new FormData();
    formData.append('kyc', uploadForm.value.photo, uploadForm.value.photo.name);
    formData.append('kyc', uploadForm.value.aadharImage, uploadForm.value.aadharImage.name);
    formData.append('kyc', uploadForm.value.panImage, uploadForm.value.panImage.name);
    return this.httpClient.post(environment.uploadKyc, formData, { responseType: 'text' }).pipe(
      map((data: string) => {
        console.log(data);
        return data;
      })
    );
  }

  updateRegistrationStatus(request: Registration): Observable<string> {
    return this.httpClient.put(environment.updateRequest, request, {responseType: 'text'}).pipe(
      map((data: string) => {
        console.log(data);
        return data;
      })
    );
  }

  saveKycDetails(userDocuments: UserDocuments[]): Observable<string> {
    return this.httpClient.post(environment.saveKycDetails, userDocuments, {responseType: 'text'}).pipe(
      map((response: string) => {
        console.log(response);
        return response;
      })
    );
  }

}
