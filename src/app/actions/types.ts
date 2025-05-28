import { ZodIssueCode } from "zod"

export type PostDataWithoutId = {
    title: string,
    description: string,
    price: number,
    productId: number,
    imageUrl: string
}

export type PostData = PostDataWithoutId & {
    id?: number,
}

export type CreateOrUpdatePostReturnType<T> = {
    validationError: ValidationErrorType<T>[] | null,
    serverError: { code: ServerCreateOrUpdatePostErrorCodeType } | null,
}

export type ServerCreateOrUpdatePostErrorCodeType = "server_error" | "not_authenticated";


export type ValidationErrorType<T> = {
    code: ZodIssueCode,
    field: keyof T
}



export type ApiReturnT<T, ErrCoodesT = null> = {
    error: { code: ErrorCodeType | ErrCoodesT } | null,
    data: T | null
}


export type ErrorCodeType = "server_error" | "unauthorized";
