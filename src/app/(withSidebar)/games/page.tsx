import Icon from "@/app/components/icons";
import Text from "@/app/components/text";
import Title from "@/app/components/title"
import Link from "next/link";
import Image from "next/image";

const GamesPage = () => {
    return (
        <>
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <Title className="font-medium" size="h3" >
                            All games
                        </Title>
                        <div className="w-full overflow-x-scroll no-scrollbar">
                            <div className="flex items-center bg-slate-100 rounded-full w-max">
                                <button className="px-4 py-2 text-slate-500 rounded-full flex-shrink-0">
                                    <Text size="xs">
                                        All games
                                    </Text>
                                </button>
                                <button className="px-4 py-2 bg-violet-200 text-violet-800 rounded-full flex items-center gap-2 flex-shrink-0">
                                    <Icon className="w-4 h-4" icon="mobile" />
                                    <Text size="xs">
                                        Mobile games
                                    </Text>
                                </button>

                                <button className="px-4 py-2 text-slate-500 rounded-full flex items-center gap-2 flex-shrink-0">
                                    <Icon className="w-4 h-4" icon="monitor" />
                                    <Text size="xs">
                                        PC/Console games
                                    </Text>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-4">
                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>
                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>

                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>
                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>

                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>

                        <Link className="aspect-[3/2] relative" href="/">
                            <div className="absolute left-0 top-0 z-10 w-full h-full bg-black/20 flex items-center justify-center">
                                <Title size="h3" className="text-white font-bold" >DOTA 2</Title>
                            </div>
                            <div className="w-full h-full relative rounded-lg overflow-clip">
                                <Image className="object-cover" fill src="/dota-2.png" alt="Dota 2 thumbnails" />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GamesPage;