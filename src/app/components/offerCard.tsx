import Link from 'next/link';
import Image from 'next/image';
import Icon from './common/icon';
import { Offer, Profile } from '@/common/types';

type Props = {
    offer: Offer,
    type?: "primary" | "alt",
    seller: Profile,
    link?: string,
    className?: string,
}

const OfferCard = ({ type = "primary", offer, seller, link, className }: Props) => {
    const linkStr = link || `/offer/${offer.id}`;
    return (
        <Link href={linkStr} className={`flex flex-col gap-4 rounded-2xl px-2 py-3  ${type === "primary" ? "bg-slate-100 " : "bg-white"} ${className}`}>
            <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                <Image className="object-cover" fill src={offer.imageUrl} alt="Dota 2 thumbnails" />
            </div>
            <h4 className="font-medium text-base">{offer.title}</h4>
            <p className='text-sm text-slate-600'>{offer.description}</p>
            <div className="flex gap-2 items-center">
                {seller.avatarUrl
                    ? <div className="relative w-6 h-6 rounded-full overflow-clip flex-shrink-0">
                        <Image className="object-cover" src={seller.avatarUrl} fill alt="profile image" />
                    </div>
                    : <div className="w-6 h-6 rounded-full overflow-clip flex-shrink-0 bg-slate-300" />
                }

                <span className="text-sm text-slate-500">{seller.name}</span>
            </div>
            <div className=" justify-end flex items-center gap-2 text-violet-600">
                <span className="font-medium text-base" >{offer.price}</span>
                <Icon className="w-4 h-4" icon="flash" />
            </div>
        </Link>
    )
}

export default OfferCard;