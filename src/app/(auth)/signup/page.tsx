'use client'

import Button from "@/app/components/common/button"
import Input from "@/app/components/common/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { signUpSchema } from "./schema"
import { isEmpty } from "lodash"
import { signup } from "../actions/signup"
import ServerError from "@/app/components/common/serverError"
import { SignUpData } from "../actions/types"

const SignUpPage = () => {
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        handleSubmit,
        control,
        formState,
        setError
    } = useForm({
        mode: "onBlur",
        reValidateMode: 'onBlur',
        resolver: zodResolver(signUpSchema, { 'async': true }),
        defaultValues: {
            email: '',
            password: '',
            username: ''
        }
    })

    const startSignUp = async (data: SignUpData) => {
        const { serverError, validationError } = await signup(data);

        if (validationError !== null)
            validationError.forEach(err => {
                setError(err.field, { type: err.code })
            })

        if (serverError) {
            switch (serverError.code) {
                case "email_address_invalid":
                    setServerError("Email is not valid")
                    setError("email", {});
                    break;
                case "user_exists":
                    setServerError("This user already exists, please use the login form")
                    break;
                case "weak_password":
                    setError("password", { "type": "invalid_string" })
                    break;
                case "server_error":
                default:
                    setServerError("Server error");
            }
        } else {
            setServerError(null);
        }
    }

    const formDisabled = !isEmpty(formState.errors) || formState.isLoading || formState.isSubmitting;


    return (
        <>
            {serverError !== null
                ?
                <ServerError serverError={serverError} onClose={() => setServerError(null)} />
                : null
            }
            <section className="container px-4 mx-auto text-center">
                <div className="max-w-[350px] mx-auto">
                    <h2 className="text-2xl mb-8 ">Create account</h2>
                    <form onSubmit={handleSubmit(startSignUp)} className="flex flex-col gap-6">
                        <Controller
                            control={control}
                            name="username"
                            render={({ field, fieldState: { error, isValidating } }) =>
                                <Input loading={isValidating} error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : error?.type === "custom" ? "This username is already exists " : undefined} className="w-full" placeholder="username" {...field} />
                            }
                        />

                        <Controller
                            control={control}
                            name="email"
                            render={({ field, fieldState: { error } }) =>
                                <Input error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : error?.type === "invalid_string" ? "Email is not valid" : undefined} className="w-full" placeholder="Email" {...field} />
                            }
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field, fieldState: { error } }) =>
                                <Input type="password" error={error !== undefined} errorStr={error?.type === "too_small" ? "At least 8 symbols " : error?.type === "invalid_string" ? "The password must contain at least one lowercase letter, one uppercase letter and a number." : undefined} className="w-full" placeholder="Password" {...field} />
                            }
                        />
                        <Button disabled={formDisabled} buttonType="submit" icon="arrow-right">Sign up</Button>

                        <div className="flex flex-col gap-2">
                            <p className="text-base ">Already have account?</p>
                            <Link href='/login' className="text-base underline">Sign in</Link>
                        </div>

                        {/* <button onClick={signInWithGoogle} className="px-6 gap-2 py-3 text-base flex items-center justify-between border border-slate-400 font-medium rounded-full">
                            Sign up with Google
                            <Icon className="w-6 h-6" icon="google" />
                        </button> */}
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUpPage;