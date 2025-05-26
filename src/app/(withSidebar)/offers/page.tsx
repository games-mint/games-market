import Dropdown from "@/app/components/common/dropdown";
import Icon from "@/app/components/common/icon";
import Text from "@/app/components/common/text";
import Featured from "@/app/components/featured";
import OfferCard from "@/app/components/offerCard";

const OffersPage = () => {
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
                                <Dropdown title="Sort by"/>
                            </div>
                        </div>
                    </div>

                    <Featured title="Featured offers" />

                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mb-32">
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                        <OfferCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OffersPage;