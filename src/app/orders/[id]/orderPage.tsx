import Image from "next/image"
import Icon from "@/app/components/common/icon"
import Card from "@/app/components/common/card";
import { DealStatus, FullDealDetails } from "@/common/types";
import { Icons } from "@/app/components/common/icon/types";


type Props = {
    order: FullDealDetails,
}

export const StatusIcons: { [key in DealStatus]: Icons } = {
    "started": "flag",
    "user_paid": "clock",
    "completed": "receipt"
}

const OrderPage = ({ order }: Props) => {
    return (
        <>
            <section className="container px-4 mx-auto pt-10">
                <h3 className="text-xl font-medium">{order.offer.title}</h3>
            </section>

            <div className="lg:flex lg:container lg:px-4 lg:mx-auto lg:mt-16 lg:gap-4">
                <section className="max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:order-2 lg:w-[30%] lg:min-w-[300px]">
                    <Card className="" title="Status">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Icon icon="flag" className={`w-6 h-6 ${order.deal.status === "started" ? "text-violet-800" : "text-slate-300"}`} />
                                <p className={`text-base font-medium ${order.deal.status === "started" ? "text-slate-900" : "text-slate-400"}`}>Waiting for user payment</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Icon icon="clock" className={`w-6 h-6 ${order.deal.status === "user_paid" ? "text-violet-800" : "text-slate-300"}`} />
                                <p className={`text-base font-medium ${order.deal.status === "user_paid" ? "text-slate-900" : "text-slate-400"}`}>Waiting for delivery</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Icon icon="receipt" className={`w-6 h-6 ${order.deal.status === "completed" ? "text-violet-800" : "text-slate-300"}`} />
                                <p className={`text-base font-medium ${order.deal.status === "completed" ? "text-slate-900" : "text-slate-400"}`}>Deal is completed</p>
                            </div>
                        </div>
                    </Card>
                </section>

                <section className="max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:w-[70%]">
                    <div className="p-4 flex flex-col gap-8 bg-slate-100 rounded-xl">
                        <h4 className="text-base font-bold">Products</h4>
                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
                            <div className="bg-white flex flex-col gap-4 px-2 py-3 rounded-2xl">
                                <div className="w-full aspect-[3/2] relative rounded-lg overflow-clip">
                                    <Image className="object-cover" fill src={order.offer.imageUrl} alt="Dota 2 thumbnails" />
                                </div>
                                <h5 className="text-sm font-medium">{order.offer.title}</h5>
                                <p className="text-slate-600 text-sm">{order.offer.description}</p>
                                <div className="flex items-center gap-2 justify-end text-violet-600 ">
                                    <span className="text-base font-medium"><span className="text-xl">{order.offer.price}</span></span>
                                    <Icon icon="flash" className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold">Total</h4>
                            <div className="flex items-center gap-2 text-violet-600">
                                <span className="text-2xl font-medium">{order.offer.price}</span>
                                <Icon icon="flash" className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section className="container px-4 mx-auto mt-8 mb-32">
                <div className="p-4 flex flex-col gap-8 bg-slate-100 rounded-xl">
                    <h4 className="text-base font-bold">Results</h4>
                
                </div>
            </section>
        </>
    )
}

export default OrderPage;