'use client'
import Button from "@/app/components/common/button"
import Icon from "@/app/components/common/icon"
import Input from "@/app/components/common/input"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import loginSchema from "./schema"
import login from "../actions/login"
import { isEmpty } from "lodash"

const LoginPage = () => {
    const [serverError, setServerError] = useState("");

    const {
        handleSubmit,
        control,
        formState,
        setError
    } = useForm({
        mode: "onBlur",
        reValidateMode: 'onBlur',
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const startLogin = async (data: any) => {
        const { serverError, validationError } = await login(data);
        if (validationError)
            validationError.forEach(err => {
                setError(err.field, { type: err.code })
            })

        if (serverError) {
            switch (serverError.code) {
                case "email_address_invalid":
                    setServerError("Предоставленный email не корректный")
                    setError("email", {});
                    break;
                case "email_not_confirmed":
                    setServerError("Емайл не подтвержден, пожалуйста подтвердите его")
                    break;
                case "invalid_credentials":
                    setServerError("Неверный email или пароль")
                    break;
                case "server_error":
                default:
                    setServerError("Ошибка на сервере");
            }
        } else {
            setServerError("");
        }
    }



    const formDisabled = !isEmpty(formState.errors) || formState.isSubmitting || formState.isLoading;

    return (
        <>
            {serverError !== ""
                ?
                <div className="fixed min-w-[250px]  mx-auto right-4 top-4 flex gap-4 justify-between items-center px-6 py-3 bg-red-200 rounded-xl">
                    <div className="flex items-center gap-2">
                        <Icon icon="warning" className="text-red-600 w-5 h-5 flex-shrink-0" />
                        <span className="text-base text-red-600">{serverError}</span>
                    </div>
                    <button className="flex-shrink-0" onClick={() => setServerError("")}>
                        <Icon icon="close-circle" className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
                : null
            }

            <section className="container px-4 mx-auto text-center">
                <div className="max-w-[350px] mx-auto">
                    <h2 className="text-2xl mb-8 ">Sign in</h2>
                    <form onSubmit={handleSubmit(startLogin)} className="flex flex-col gap-6">
                        <Controller
                            control={control}
                            name="email"
                            render={({ field, fieldState: { error, isValidating } }) =>
                                <Input error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : error?.type === "invalid_string" ? "Email is not valid" : undefined} className="w-full" placeholder="Email" {...field} />
                            }
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field, fieldState: { error, isValidating, } }) =>
                                <Input type="password" error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required " : ""} className="w-full" placeholder="Password" {...field} />
                            }
                        />
                        <Button disabled={formDisabled} buttonType="submit" icon="arrow-right">Sign in</Button>

                        <div className="flex flex-col gap-2">
                            <p className="text-base ">Do not have an account?</p>
                            <Link href='/signup' className="text-base underline">Sign up</Link>
                        </div>

                        {/* <button className="px-6 gap-2 py-3 text-base flex items-center justify-between border border-slate-400 font-medium rounded-full">
                            Sign in with Google
                            <Icon className="w-6 h-6" icon="google" />
                        </button> */}
                    </form>
                </div>
            </section>
        </>
    )
}

export default LoginPage;