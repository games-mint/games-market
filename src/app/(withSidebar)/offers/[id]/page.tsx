
import OfferCard from "@/app/components/offerCard";
import { db } from "@/db";
import { posts, products, profiles } from "@/db/schema";
import { eq } from "drizzle-orm";

const OffersPage = async ({
    params,
}: {
    params: Promise<{ id: number }>
}) => {

    const { id } = await params;

    const product = (await db.select().from(products).where(eq(products.id, id)))[0]

    const offers = (await db.select().from(posts).where(eq(posts.productId, id)).leftJoin(profiles, eq(profiles.id, posts.authorId))).map(el => ({ offer: el.posts!, seller: el.profiles! }))

    return (
        <>
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl lg:text-2xl" >
                            {product.name}
                        </h3>
                        <div className="w-full overflow-x-scroll no-scrollbar">
                            <div className="flex items-center gap-4">
                                {/* <Dropdown title="Sort by" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mb-32">
                        {offers.map(({ offer, seller }) => (
                            <OfferCard key={offer.id} offer={offer} seller={seller} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OffersPage;