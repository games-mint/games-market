import { ZodIssueCode } from "zod"

export type SignUpData = {
    username: string,
    email: string,
    password: string
}

export type SignUpReturnType<T> = {
    validationError: ValidationErrorType<T>[] | null,
    serverError: { code: ServerSignUpErrorCodeType } | null,
}

export type ServerSignUpErrorCodeType = "email_address_invalid" | "user_exists" | "weak_password" | "server_error";


export type ValidationErrorType<T> = {
    code: ZodIssueCode,
    field: keyof T
}


export type LoginData = {
    email: string,
    password: string
}

export type LoginReturnType<T> = {
    validationError: ValidationErrorType<T>[] | null,
    serverError: { code: ServerLoginErrorCodeType } | null,
}

export type ServerLoginErrorCodeType = "email_address_invalid" | "email_not_confirmed" | "invalid_credentials" | "server_error";