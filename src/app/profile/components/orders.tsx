import Avatar from "@/app/components/common/avatar";
import Card from "@/app/components/common/card"
import Icon from "@/app/components/common/icon";
import { DealStatus, FullDealDetails } from "@/common/types";
import Link from "next/link"
import { useMemo, useState } from "react";

export const StatusDict: { [key in DealStatus]: string } = {
    "started": "Waiting for user payment",
    "user_paid": "Waiting for delivery",
    "completed": "Deal is completed"
}

type Props = {
    orders: FullDealDetails[]
}

const OrdersCard = ({ orders }: Props) => {
    const [activeStatus, setActiveStatus] = useState<'progress' | 'compeleted'>('progress');



    const ordersToShow = useMemo(() => orders.filter(el => activeStatus === "compeleted" ? el.deal.status === "completed" : el.deal.status !== "completed"), [activeStatus, orders]);

    return (
        <Card
            className='h-full'
            header={
                <div className='flex items-center'>
                    <button onClick={() => setActiveStatus('progress')} className={`px-4 py-2 ${activeStatus === 'progress' ? "text-violet-600 bg-violet-200" : "text-slate-500"} rounded-full text-sm whitespace-nowrap font-medium`}>In progress</button>
                    <button onClick={() => setActiveStatus('compeleted')} className={`px-4 py-2 ${activeStatus === 'compeleted' ? "text-violet-600 bg-violet-200" : "text-slate-500"} rounded-full text-sm whitespace-nowrap font-medium`}>Finished</button>
                </div>
            }
            title='Your orders'
        >
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-4'>
                {ordersToShow.map(({ deal, seller, offer }) => (
                    <Link key={deal.id} href={`/orders/${deal.id}`} className='px-2 py-3 flex flex-col gap-4 bg-white rounded-2xl'>
                        <h5 className='font-medium text-sm'>{offer.title}</h5>
                        <p className='text-slate-400 text-xs'>{StatusDict[deal.status]}</p>
                        <div className='flex items-center gap-2'>
                            <Avatar url={seller.avatarUrl} />
                            <span className='text-xs text-slate-500'>{seller.name}</span>
                        </div>
                        <div className='flex items-center justify-end gap-2 text-violet-600'>
                            <span className='text-xl'>{offer.price}</span>
                            <Icon className='w-4 h-4' icon="flash" />
                        </div>
                    </Link>
                ))}
            </div>
        </Card>
    )
}

export default OrdersCard;