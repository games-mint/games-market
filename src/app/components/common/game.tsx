import Link from "next/link"
import Image from "next/image"

type Props = {
    name: string,
    image: string,
    id: string | number
}

const Game = ({ name, image, id }: Props) => {
    return (
        <Link className="aspect-[3/2] relative" href={`/offers/${id}`}>
            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 rounded-lg overflow-clip flex items-center justify-center">
                <h3 className="text-white font-bold text-xl lg:text-4xl text-center" >{name}</h3>
            </div>
            <div className="w-full h-full relative rounded-lg overflow-clip">
                <Image className="object-cover" fill src={image} alt={`${name} thumbnail`} />
            </div>
        </Link>
    )
}

export default Game;