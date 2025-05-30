
import Button from "@/app/components/common/button"
import { Profile, Review } from "@/common/types"
import ReviewCard from "@/app/sellers/[id]/components/reviewCard"


type Props = {
    reviews: {
        review: Review,
        author: Profile
    }[],
    closeModal: () => void
}

const ReviewsModal = ({ reviews, closeModal }: Props) => {
    return (
        <div className=" fixed left-0 top-0 z-30 w-full h-screen bg-black/25 px-4 py-4">
            <div className="relative max-w-[650px] h-[90%] overflow-y-scroll no-scrollbar px-3 py-6 flex items-center flex-col gap-8 mx-auto mt-8 bg-white w-full rounded-2xl sm:px-6 sm:py-8 sm:gap-16">
                <h3 className="text-xl lg:text-2xl">Reviews</h3>
                <div className="flex flex-col gap-6 items-center w-full">
                    {reviews.map(review => <ReviewCard key={review.review.id} full className="!bg-slate-50 w-full" review={review.review} author={review.author} />)}
                </div>
            </div>
            <div className="flex flex-col w-[calc(100%_-_2rem)] max-w-[650px] rounded-2xl relative -top-[72px] py-3 items-center mx-auto bg-white">
                <Button onClick={closeModal} type="secondary">Close</Button>
            </div>
        </div>
    )
}

export default ReviewsModal;