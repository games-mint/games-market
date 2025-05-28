import Game from "@/app/components/common/game";
import { Tab, TabGroup } from "@/app/components/common/tabs";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

const GamesPage = async () => {

    const games = await db.select({ id: products.id, name: products.name, image_url: products.imageUrl }).from(products).where(eq(products.category, 'games'));

    return (
        <>
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl lg:text-2xl" >
                            All games
                        </h3>
                        {/* <TabGroup>
                            <Tab>All games</Tab>
                            <Tab active icon="mobile">Mobile games</Tab>
                            <Tab icon="monitor">PC/Console games</Tab>
                        </TabGroup> */}

                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
                            {games.map(({ name, image_url, id }) => <Game id={id} name={name} image={image_url} key={id} />)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GamesPage;