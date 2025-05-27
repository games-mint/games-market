import Dropdown from "@/app/components/common/dropdown";
import Featured from "@/app/components/featured";
import OfferCard from "@/app/components/offerCard";
import { db } from "@/db";
import { posts, profiles } from "@/db/schema";
import { eq } from "drizzle-orm";

const OffersPage = async ({
    params,
}: {
    params: Promise<{ id: number }>
}) => {

    const { id } = await params;

    const offers = await db.select().from(posts).where(eq(posts.product_id, id)).leftJoin(profiles, eq(posts.author_id, profiles.id));

    return (
        <>
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl lg:text-2xl" >
                            All offers
                        </h3>
                        <div className="w-full overflow-x-scroll no-scrollbar">
                            <div className="flex items-center gap-4">
                                <Dropdown title="Sort by" />
                            </div>
                        </div>
                    </div>

                    {/* <Featured title="Featured offers" /> */}

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mb-32">
                        {offers.map(({ posts: { title, description, id, price, image_url }, profiles }) => (
                            <OfferCard authorName={profiles?.name} key={id} id={id} title={title} description={description} image={image_url} price={price} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OffersPage;