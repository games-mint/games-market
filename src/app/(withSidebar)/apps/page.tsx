import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

import Game from "@/app/components/common/game";

const AppsPage = async () => {
    const apps = await db.select({ id: products.id, name: products.name, image_url: products.image_url }).from(products).where(eq(products.category, 'apps'));

    return (
        <>
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl lg:text-2xl" >
                            All apps
                        </h3>

                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
                            {apps.map(el =>
                                <Game key={el.id} id={el.id} name={el.name} image={el.image_url} />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppsPage;