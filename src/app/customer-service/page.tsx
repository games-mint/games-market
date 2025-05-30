'use client'
import { useState } from "react"
import Button from "../components/common/button"
import SubmitRequestModal from "./modal"

const CustomerServicePage = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>

            {showModal ? <SubmitRequestModal closeModal={() => setShowModal(false)} /> : null}

            <main className="container px-4 mx-auto pt-10">
                <section className="flex flex-col items-center text-center gap-12">
                    <h2 className="text-2xl xl:text-4xl">Customer service</h2>

                    <h3 className="text-xl xl:text-2xl">Submit a Support Request</h3>
                    <p className="text-base">
                        Have an issue or question? Fill out our support form and a team member will get back to you promptly.
                    </p>
                    <Button className="w-fit" onClick={() => setShowModal(true)} >Submit request</Button>
                </section>
            </main>
        </>
    )
}

export default CustomerServicePage;