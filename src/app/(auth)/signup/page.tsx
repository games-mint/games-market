import Button from "@/app/components/common/button"
import Icon from "@/app/components/common/icon"
import Input from "@/app/components/common/input"
import Link from "next/link"

const SignUpPage = () => {
    return (
        <>
            <section className="container px-4 mx-auto text-center">
                <div className="max-w-[350px] mx-auto">
                    <h2 className="text-2xl mb-8 ">Create account</h2>
                    <div className="flex flex-col gap-6">
                        <Input placeholder="Name" />
                        <Input placeholder="Email" />
                        <Input placeholder="Password" type="password" />
                        <Button icon="arrow-right">Sign up</Button>

                        <div className="flex flex-col gap-2">
                            <p className="text-base ">Already have account?</p>
                            <Link href='/login' className="text-base underline">Sign in</Link>
                        </div>

                        <button className="px-6 gap-2 py-3 text-base flex items-center justify-between border border-slate-400 font-medium rounded-full">
                            Sign up with Google
                            <Icon className="w-6 h-6" icon="google" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpPage;