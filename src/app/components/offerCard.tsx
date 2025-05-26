import Link from 'next/link';
import Image from 'next/image';
import Icon from './common/icon';

type Props = {
    type?: "primary" | "alt",
    className?: string
}

const OfferCard = ({ type = "primary",className }: Props) => {
    return (
        <Link href="offers/1" className={`flex flex-col gap-4 rounded-2xl px-2 py-3  ${type === "primary" ? "bg-slate-100 " : "bg-white"} ${className}`}>
            <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
            </div>
            <h4 className="font-medium text-base">Dota 2 Account with skins</h4>
            <p className='text-sm text-slate-600'>Instantly top up your in-game currency and boost your gameplay without delay!</p>
            <div className="flex gap-2 items-center">
                <div className="relative w-6 h-6 rounded-full overflow-clip flex-shrink-0">
                    <Image className="object-fill" src="/profile-image.png" fill alt="profile image" />
                </div>
                <span className="text-sm text-slate-500">@Green_Dragon_3</span>
            </div>
            <div className=" justify-end flex items-center gap-2 text-violet-600">
                <span className="font-medium text-base" >24</span>
                <Icon className="w-4 h-4" icon="flash" />
            </div>
        </Link>
    )
}

export default OfferCard;