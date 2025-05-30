import Icon from '@/app/components/common/icon';
import { Profile, Review } from '@/common/types';
import { useMemo } from 'react';

type Props = {
    review: Review,
    author: Profile,
    full?: boolean,
    className?: string
}

const ReviewCard = ({ review, author, full = false, className }: Props) => {

    const stars = useMemo(() =>
        Array.from({ length: 5 }).map((_, idx) => review.rating > idx ? "yellow" : "gray")
        , [review]);

    return (
        <div className={`flex flex-col gap-4 bg-white rounded-xl px-4 py-6 ${className}`}>
            <span className='text-sm text-slate-400'>{review.createdAt.toDateString()}</span>
            <div className='flex gap-2'>
                {stars.map((star, idx) => {
                    if (star === "yellow")
                        return <Icon key={idx} className='w-6 h-6 text-amber-500' icon="star" />
                    return <Icon key={idx} className='w-6 h-6 text-slate-400' icon="star" />
                })}
            </div>
            <span className='text-sm text-slate-400'>{author.name}</span>
            <p className={`text-sm ${full ? "" : "max-h-[100px]"} text-ellipsis overflow-hidden`}>
                {review.message}
            </p>
        </div>
    )
}

export default ReviewCard;