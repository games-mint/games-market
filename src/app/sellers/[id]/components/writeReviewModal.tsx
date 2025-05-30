import { publishReviw } from "@/app/actions/reviews";
import Button from "@/app/components/common/button";
import Icon from "@/app/components/common/icon";
import ServerError from "@/app/components/common/serverError";
import TextArea from "@/app/components/common/textarea";
import { useMemo, useState, useTransition } from "react";

type Props = {
    closeModal: () => void;
    authorId: string,
    receiverId: string,
}

const WriteReviewModal = ({ closeModal, authorId, receiverId }: Props) => {
    const [stars, setStars] = useState(5);
    const [message, setMessage] = useState('')
    const [isPending, startTransition] = useTransition()
    const [serverError, setServerError] = useState<string | null>(null);


    const publish = () => {
        startTransition(async () => {
            const { error } = await publishReviw({ authorId, receiverId, rating: stars, message })

            if (error) {
                switch (error.code) {
                    case "unauthorized":
                        setServerError("You are not authorised for this action")
                        break;
                    case "server_error":
                    default:
                        setServerError("Server error");
                }
                return;
            }

            closeModal();
        })
    }

    return (
        <>

            {serverError !== null
                ?
                <ServerError serverError={serverError} onClose={() => setServerError(null)} />
                : null
            }

            <div className=" fixed left-0 top-0 z-30 w-full h-screen overflow-y-scroll bg-black/25 px-4 py-4">
                <div className="relative max-w-[650px] px-3 py-6 flex items-center flex-col gap-8 mx-auto mt-8 bg-white w-full rounded-2xl sm:px-6 sm:py-8 sm:gap-16">
                    <h3 className="text-xl lg:text-2xl">Leave a review</h3>
                    <div className="flex flex-col gap-6 items-center w-full sm:flex-row sm:items-start">
                        <div className="flex flex-col gap-6 w-full">
                            <StarSelector disabled={isPending} value={stars} onChange={setStars} />
                            <TextArea disabled={isPending} className="w-full" value={message} onChange={setMessage} placeholder="Review" />
                        </div>
                    </div>

                    <div className="flex w-full justify-end gap-2">
                        <Button disabled={isPending} onClick={closeModal} type="secondary">Cancel</Button>
                        <Button disabled={isPending} onClick={publish}>Update profile</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

const StarSelector = ({ value, disabled, onChange }: { value: number, disabled:boolean, onChange: (value: number) => void }) => {

    const stars = useMemo(() =>
        Array.from({ length: 5 }).map((_, idx) => value > idx ? "yellow" : "gray")
        , [value]);

    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                {stars.map((el, idx) => (
                    <button disabled={disabled} className="disabled:opacity-50" key={idx} onClick={() => onChange(idx+1)}>
                        <Icon className={`w-8 h-8 ${el === 'yellow' ? "text-amber-500" : "text-slate-400"}`} icon="star" />
                    </button>
                ))}
            </div>

            <p>{value} out of 5</p>
        </div>
    )
}

export default WriteReviewModal;