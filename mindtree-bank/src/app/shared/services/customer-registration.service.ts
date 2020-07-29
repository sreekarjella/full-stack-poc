import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  Branch,
  AccountType,
  Document,
  Education,
  Gender,
  Income,
  MaritalStatus,
  Occupation,
  RegistrationStatus,
  ResidentialStatus,
  UserType,
  UserDetails,
  Registration,
  Status,
  UserDocuments
} from '../entities/customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registeredCustomers: Registration[];
  branches: Branch[];
  accountTypes: AccountType[];
  documents: Document[];
  educations: Education[];
  genders: Gender[];
  incomes: Income[];
  maritalStatus: MaritalStatus[];
  occupations: Occupation[];
  registrationStatus: RegistrationStatus[];
  residentialStatus: ResidentialStatus[];
  userTypes: UserType[];
  userDocuments: UserDocuments[];


  metaDataInitialization(): Observable<void> {
    // tslint:disable-next-line: deprecation
    return forkJoin(
      this.allRegisteredCustomers(),
      this.allBranches(),
      this.allAccountTypes(),
      this.allDocuments(),
      this.allEducation(),
      this.allGenders(),
      this.allIncomes(),
      this.allMaritalStatus(),
      this.allOccupations(),
      this.allRegistrationStatus(),
      this.allResidentialStatus(),
      this.allUserTypes(),
      this.allUserDocuments()
    ).pipe(
      map(() => {
        console.log(this.registeredCustomers);
        console.log(this.branches);
        console.log(this.accountTypes);
        console.log(this.documents);
        console.log(this.educations);
        console.log(this.genders);
        console.log(this.incomes);
        console.log(this.maritalStatus);
        console.log(this.occupations);
        console.log(this.registrationStatus);
        console.log(this.residentialStatus);
        console.log(this.userTypes);
        console.log(this.userDocuments);
        return;
      })
    );
  }

  allRegisteredCustomers(): Observable<Registration[]> {
    return this.httpClient.get<Registration[]>(environment.allRegisteredCustomers).pipe(
      map((data: Registration[]) => {
        this.registeredCustomers = data;
        return data;
      })
    );
  }

  allBranches(): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>(environment.allBranches).pipe(
      map((response: Branch[]) => {
        this.branches = response;
        return response;
      })
    );
  }

  allAccountTypes(): Observable<AccountType[]> {
    return this.httpClient.get<AccountType[]>(environment.allAccountTypes).pipe(
      map((response: AccountType[]) => {
        this.accountTypes = response;
        return response;
      })
    );
  }

  allDocuments(): Observable<Document[]> {
    return this.httpClient.get<Document[]>(environment.allDocuments).pipe(
      map((response: Document[]) => {
        this.documents = response;
        return response;
      })
    );
  }

  allEducation(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(environment.allEducations).pipe(
      map((response: Education[]) => {
        this.educations = response;
        return response;
      })
    );
  }

  allGenders(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(environment.allGenders).pipe(
      map((response: Gender[]) => {
        this.genders = response;
        return response;
      })
    );
  }

  allIncomes(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(environment.allIncomes).pipe(
      map((response: Income[]) => {
        this.incomes = response;
        return response;
      })
    );
  }

  allMaritalStatus(): Observable<MaritalStatus[]> {
    return this.httpClient.get<MaritalStatus[]>(environment.allMaritalStatus).pipe(
      map((response: MaritalStatus[]) => {
        this.maritalStatus = response;
        return response;
      })
    );
  }

  allOccupations(): Observable<Occupation[]> {
    return this.httpClient.get<Occupation[]>(environment.allOccupations).pipe(
      map((response: Occupation[]) => {
        this.occupations = response;
        return response;
      })
    );
  }

  allRegistrationStatus(): Observable<RegistrationStatus[]> {
    return this.httpClient.get<RegistrationStatus[]>(environment.allRegistrationStatus).pipe(
      map((response: RegistrationStatus[]) => {
        this.registrationStatus = response;
        return response;
      })
    );
  }

  allResidentialStatus(): Observable<ResidentialStatus[]> {
    return this.httpClient.get<ResidentialStatus[]>(environment.allResidentialStatus).pipe(
      map((response: ResidentialStatus[]) => {
        this.residentialStatus = response;
        return response;
      })
    );
  }

  allUserTypes(): Observable<UserType[]> {
    return this.httpClient.get<UserType[]>(environment.allUserTypes).pipe(
      map((response: UserType[]) => {
        this.userTypes = response;
        return response;
      })
    );
  }

  allUserDocuments(): Observable<UserDocuments[]> {
    return this.httpClient.get<UserDocuments[]>(environment.allUserDocuments).pipe(
      map((response: UserDocuments[]) => {
        this.userDocuments = response;
        return response;
      })
    );
  }

  findCustomer(id: number): Registration {
    return this.registeredCustomers.find(c => c.id === id);
  }

  updateRequest(customer: Registration): Observable<string> {
    const index = this.registeredCustomers.findIndex(c => c.id === customer.id);
    this.registeredCustomers[index] = customer;
    return this.httpClient.put(environment.updateRequest, customer, { responseType: 'text' }).pipe(
      map((data: string) => {
        return data;
      })
    );
  }

  private customerAlreadyRegistered(customer: Registration): boolean {
    this.registeredCustomers.forEach((registeredCustomer) => {
      if (registeredCustomer.userDetails.emailId === customer.userDetails.emailId) {
        return true;
      }
    });
    return false;
  }

  accountCreationEmail(customer: Registration): Observable<string> {
    return this.httpClient.post(environment.accountCreated, customer, { responseType: 'text' }).pipe(
      map((response: string) => {
        console.log(response);
        return response;
      })
    );
  }

  registerCustomer(customerForm: FormGroup): Observable<string> {
    const customerData = this.extractFormData(customerForm);
    if (this.customerAlreadyRegistered(customerData)) {
      return of('Duplicate Registration');
    }
    return this.httpClient.post(environment.registerCustomer, customerData, { responseType: 'text' }).pipe(
      map((data: string) => {
        console.log(data);
        this.registeredCustomers.push(customerData);
        return data;
      })
    );
    // return of('Success');
  }

  private extractFormData(customerForm: FormGroup): Registration {
    const userDetails = new UserDetails();
    userDetails.firstName = customerForm.controls.firstName.value;
    userDetails.lastName = customerForm.controls.lastName.value;
    userDetails.emailId = customerForm.controls.emailId.value;
    userDetails.contactNumber = customerForm.controls.contactNumber.value;
    userDetails.addressLine1 = customerForm.controls.addressLine1.value;
    userDetails.addressLine2 = customerForm.controls.addressLine2.value;
    userDetails.dob = customerForm.controls.dob.value;
    userDetails.religion = customerForm.controls.religion.value;
    userDetails.userType = this.userTypes[0];
    const branch: Branch = customerForm.controls.branchName.value;
    const accountType: AccountType = customerForm.controls.accountType.value;
    const occupation: Occupation = customerForm.controls.occupation.value;
    const education: Education = customerForm.controls.education.value;
    const income: Income = customerForm.controls.incomeRange.value;
    const residentialStatus: ResidentialStatus = customerForm.controls.residentialStatus.value;
    const gender: Gender = customerForm.controls.gender.value;
    const maritalStatus: MaritalStatus = customerForm.controls.maritalStatus.value;
    const registrationStatus: RegistrationStatus = this.findRegistrationStatus(Status.Pending);
    const registration = new Registration();
    registration.userDetails = userDetails;
    registration.branch = branch;
    registration.accountType = accountType;
    registration.occupation = occupation;
    registration.education = education;
    registration.income = income;
    registration.residentialStatus = residentialStatus;
    registration.gender = gender;
    registration.maritalStatus = maritalStatus;
    registration.registrationStatus = registrationStatus;
    return registration;
  }

  findRegistrationStatus(status: string): RegistrationStatus {
    return this.registrationStatus.find(r => r.registrationStatus === status);
  }

  findDocumentType(type: string): Document {
    return this.documents.find(d => d.documentType === type);
  }

  findUserDocument(userId: number): UserDocuments[] {
    const docs: UserDocuments[] = [];
    this.userDocuments.forEach((doc) => {
      if (doc.userId === userId) {
        docs.push(doc);
      }
    });
    return docs;
  }

}

