import Button from "@/app/components/common/button"
import Icon from "@/app/components/common/icon"
import Input from "@/app/components/common/input"
import Link from "next/link"

const ConfirmExpiredPage = () => {
    return (
        <>
            <section className="container px-4 mx-auto text-center">
                <div className="max-w-[350px] mx-auto">
                    <h2 className="text-2xl mb-8 ">The link has expired</h2>
                    <div className="flex flex-col gap-6">
                        <p className="text-base ">Enter your email to resend the link to your email</p>
                        <Input placeholder="Email" />
                        <Button icon="arrow-right">Send link</Button>
                    </div>
                </div>
            </section >
        </>
    )
}

export default ConfirmExpiredPage;