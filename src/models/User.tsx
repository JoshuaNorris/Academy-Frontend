

export type User = {
    Email: string;
    DisplayName: string;
    FirstName: string;
    LastName: string;
    UserRole: UserRole;
}

export type RegisterRequest = {
    Email: string;
    DisplayName: string;
    FirstName: string;
    LastName: string;
    Password: string;
    UserRole: UserRole;
}

export type RegisterPage = {
    Email: string;
    DisplayName: string;
    FirstName: string;
    LastName: string;
    Password: string;
    ConfirmPassword: string;
}

export type LoginRequest = {
    Email: string;
    Password: string;
}

export enum UserRole {
    Student = 0,
    Administrator = 1,
    Anonymous = 2
}

export const ANONYMOUS_USER: User = {
    Email: "",
    DisplayName: "",
    FirstName: "",
    LastName: "",
    UserRole: UserRole.Anonymous
  };
  