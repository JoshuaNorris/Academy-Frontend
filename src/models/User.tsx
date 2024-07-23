

export type User = {
    Email: string;
    UserName: string;
    FirstName: string;
    LastName: string;
}

export type RegisterRequest = {
    Email: string;
    UserName: string;
    Password: string;
    FirstName: string;
    LastName: string;
}

export type RegisterPage = {
    Email: string;
    UserName: string;
    FirstName: string;
    LastName: string;
    Password: string;
    ConfirmPassword: string;
}

export type LoginRequest = {
    Email: string;
    Password: string;
}

export const ANONYMOUS_USER: User = {
    Email: "",
    UserName: "",
    FirstName: "",
    LastName: "",
};
  