import Button from "@/app/components/common/button"
import Icon from "@/app/components/common/icon"
import Input from "@/app/components/common/input"
import Link from "next/link"

const ConfirmEmailPage = () => {
    return (
        <>
            <section className="container px-4 mx-auto text-center">
                <div className="max-w-[350px] mx-auto">
                    <h2 className="text-2xl mb-8 ">Your email address is not confirmed.</h2>
                    <p className="text-base">Please check your email, you should receive a link to confirm your email.</p>
                </div>
            </section>
        </>
    )
}

export default ConfirmEmailPage;