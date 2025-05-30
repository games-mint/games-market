import { useState, useTransition } from "react";
import Button from "../components/common/button";
import Input from "../components/common/input";
import TextArea from "../components/common/textarea";

type Props = {
    closeModal: () => void;

}

const SubmitRequestModal = ({closeModal}:Props) => {
    const [message, setMessage] = useState('')
    const [isPending, startTransition] = useTransition()

    const send = () => {
        startTransition( async () => {
           closeModal() 
        })
    }

    return (
        <div className=" fixed left-0 top-0 z-30 w-full h-screen overflow-y-scroll bg-black/25 px-4 py-4">
            <div className="relative max-w-[650px] px-3 py-6 flex items-center flex-col gap-8 mx-auto mt-8 bg-white w-full rounded-2xl sm:px-6 sm:py-8 sm:gap-16">
                <h3 className="text-xl lg:text-2xl">Submit a Support Request</h3>
                <div className="flex flex-col gap-6 items-center w-full sm:flex-row sm:items-start">
                    <div className="flex flex-col gap-6 w-full">
                        <Input placeholder="Email" />
                        <TextArea disabled={isPending} className="w-full" value={message} onChange={setMessage} placeholder="Describe your issue" />
                    </div>
                </div>

                <div className="flex w-full justify-end gap-2">
                    <Button disabled={isPending} onClick={closeModal} type="secondary">Cancel</Button>
                    <Button disabled={isPending} onClick={send}>Submit</Button>
                </div>
            </div>
        </div>
    )
}


export default SubmitRequestModal;