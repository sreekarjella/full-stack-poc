// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  allRegisteredCustomers: 'http://localhost:8080/registration/registered',
  allBranches: 'http://localhost:8080/metadata/branches',
  allAccountTypes: 'http://localhost:8080/metadata/account-types',
  allDocuments: 'http://localhost:8080/metadata/documents',
  allEducations: 'http://localhost:8080/metadata/educations',
  allGenders: 'http://localhost:8080/metadata/genders',
  allIncomes: 'http://localhost:8080/metadata/incomes',
  allMaritalStatus: 'http://localhost:8080/metadata/marital-status',
  allOccupations: 'http://localhost:8080/metadata/occupation',
  allRegistrationStatus: 'http://localhost:8080/metadata/registration-status',
  allResidentialStatus: 'http://localhost:8080/metadata/residential-status',
  allUserTypes: 'http://localhost:8080/metadata/user-type',
  allUserDocuments: 'http://localhost:8080/metadata/user-documents',
  registerCustomer: 'http://localhost:8080/registration/customer',
  updateRequest: 'http://localhost:8080/registration/update-request',
  saveKycDetails: 'http://localhost:8080/registration/upload-kyc-details',
  uploadKyc: 'http://localhost:8080/upload/upload-documents',
  sendEmail: 'http://localhost:8080/validation/send-registration-email',
  accountCreated: 'http://localhost:8080/validation/account-created',
  auth: 'http://localhost:8080/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
