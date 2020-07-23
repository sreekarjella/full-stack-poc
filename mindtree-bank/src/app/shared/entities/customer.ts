
export enum Status {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected',
    DocumentUploaded = 'Document Uploaded',
    AccountCreated = 'Account Created'
}

export enum DocType {
    Photo = 'Photo',
    Pan = 'PAN Card',
    Aadhar = 'Aadhar Card'
}

export class Branch {
    id: number;
    branchName: string;
    ifscCode: string;
    micrCode: string;
    address: string;
}

export class AccountType {
    id: number;
    accountType: string;
}

export class Document {
    id: number;
    documentType: string;
}

export class Education {
    id: number;
    education: string;
}

export class Gender {
    id: number;
    gender: string;
}

export class Income {
    id: number;
    incomeRange: string;
}

export class MaritalStatus {
    id: number;
    maritalStatus: string;
}

export class Occupation {
    id: number;
    occupation: string;
}

export class RegistrationStatus {
    id: number;
    registrationStatus: string;
}

export class ResidentialStatus {
    id: number;
    residentialStatus: string;
}

export class UserDocuments {
    id: number;
    userId: number;
    document: Document;
    documentNumber: string;
    path: string;
}

export class  UserType {
    id: number;
    userType: string;
}

export class UserDetails {
    id: number;
    firstName: string;
    lastName: string;
    emailId: string;
    contactNumber: string;
    addressLine1: string;
    addressLine2: string;
    dob: string;
    religion: string;
    userType: UserType;
    accountNumber: number;
}

export class Registration {
    id: number;
    userDetails: UserDetails;
    branch: Branch;
    accountType: AccountType;
    occupation: Occupation;
    education: Education;
    income: Income;
    residentialStatus: ResidentialStatus;
    gender: Gender;
    maritalStatus: MaritalStatus;
    registrationStatus: RegistrationStatus;
}
