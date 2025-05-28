'use server'
import Link from "next/link";
import Text from "@/app/components/common/text";
import Featured from "@/app/components/featured";
import Game from "@/app/components/common/game";
import { getPopularGames } from "@/app/actions/products";

const MainPage = async () => {

    const popularGames = await getPopularGames();

    return (
        <>
            <section className="container mx-auto px-4 pt-10 lg:pt-16">
                <Featured title="Featured offers" />
            </section>

            <section className="container mx-auto px-4 mt-10 lg:mt-16">
                <div className="flex flex-col gap-6">
                    <h3 className="font-medium text-xl lg:text-2xl"  >
                        Popular games
                    </h3>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
                        {popularGames.map(({ id, name, imageUrl }) => (
                            <Game key={id} name={name} image={imageUrl} id={id} />
                        ))}
                    </div>

                </div>
            </section>

            <footer className="flex flex-col lg:flex-row lg:justify-between gap-8 container px-4 mx-auto py-8 mb-20 mt-10">
                <nav className="flex flex-col gap-8 lg:flex-row lg:order-2">
                    <Link href="/" className="text-slate-700 font-medium text-base">Terms of Service</Link>
                    <Link href="/" className="text-slate-700 font-medium text-base">Privacy Policy</Link>
                    <Link href="/" className="text-slate-700 font-medium text-base">Contacts</Link>
                    <Link href="/" className="text-slate-700 font-medium text-base">FAQ</Link>
                </nav>
                <Text className="text-slate-700">© 2025 Digital Trading/Global Digital Technology.<br /> All rights reserved.</Text>
            </footer>
        </>
    )
}

export default MainPage;