'use client'
import Text from '@/app/components/common/text';
import Icon from '@/app/components/common/icon';
import Title from '../components/common/title';
import Card from '../components/common/card';
import OfferCard from '../components/offerCard';
import Dropdown from '../components/common/dropdown';
import Link from 'next/link';
import { DealStatus, FullDealDetails, Offer, Profile } from '@/common/types';
import Avatar from '../components/common/avatar';
import EditProfileModal from './components/modal';
import { useState } from 'react';
import { ProfileHeader } from '../components/header';
import Navigation from '../components/navigation';


export const StatusDict: { [key in DealStatus]: string } = {
    "started": "Waiting for user payment",
    "user_paid": "Waiting for delivery",
    "completed": "Deal is completed"
}


type Props = {
    userData: Profile,
    offers: Offer[],
    deals: FullDealDetails[],
    orders: FullDealDetails[]
}

const ProfilePage = ({ userData, offers, deals, orders }: Props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <ProfileHeader openModal={() => setShowModal(true)} />
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">

                {showModal
                    ? <EditProfileModal closeModal={() => setShowModal(false)} profile={userData} />
                    : null}

                <section className='container mx-auto px-4 pt-10'>
                    <div className="flex gap-2 items-center">
                        <Avatar size='xl' url={userData.avatarUrl} />
                        <div className="flex flex-col gap-2">
                            <Title size="h3" className="text-slate-700">{userData.name}</Title>
                            <Text size="sm" className="text-slate-500">from {userData.createdAt.toDateString()}</Text>
                        </div>
                    </div>
                </section>

                <div className='lg:flex lg:gap-4 lg:container lg:mx-auto lg:px-4 lg:mt-16'>
                    <section className='max-lg:container max-lg:mx-auto max-lg:px-4 max-lg:mt-8 lg:w-[50%]'>
                        <Card
                            className='h-full'
                            header={
                                <div className='flex items-center'>
                                    <button className='px-4 py-2 text-violet-600 bg-violet-200 rounded-full  text-sm whitespace-nowrap font-medium'>In progress</button>
                                    <button className='px-4 py-2 text-slate-500 rounded-full whitespace-nowrap text-sm  font-medium'>Completed</button>
                                </div>
                            }
                            title='Your orders'
                        >
                            <div className='grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-4'>
                                {orders.map(({ deal, seller, offer }) => (
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
                    </section>

                    <section className='max-lg:container max-lg:mx-auto max-lg:px-4 max-lg:mt-8 lg:w-[50%]'>
                        <Card
                            className='h-full'
                            header={
                                <div className='flex items-center'>
                                    <button className='px-4 py-2 text-violet-600 bg-violet-200 rounded-full  text-sm whitespace-nowrap font-medium'>In progress</button>
                                    <button className='px-4 py-2 text-slate-500 rounded-full whitespace-nowrap text-sm  font-medium'>Completed</button>
                                </div>
                            }
                            title='Your deals'
                        >
                            <div className='grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-4'>
                                {deals.map(({ deal, seller, offer }) => (
                                    <Link key={deal.id} href={`/deals/${deal.id}`} className='px-2 py-3 flex flex-col gap-4 bg-white rounded-2xl'>
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
                    </section>
                </div>


                <div className='lg:flex lg:gap-4 lg:container lg:mx-auto lg:px-4 lg:mt-16'>
                    <section className='max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:w-[50%]'>
                        <Card expandable title='Last reviews' className='h-full' >
                            <div className='flex flex-col gap-8'>
                                <div className='flex items-center gap-2'>
                                    <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                    <Title size="h1" className='text-slate-700'>4.8</Title>
                                    <Text size='sm' className='font-medium text-slate-700'>500 reviews</Text>
                                </div>
                                <div className='flex gap-4'>
                                    <div className='flex flex-col gap-4 bg-white rounded-xl px-4 py-6 max-w-[300px]'>
                                        <span className='text-sm text-slate-400'>20 May</span>
                                        <div className='flex gap-2'>
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-slate-400' icon="star" />
                                        </div>
                                        <span className='text-sm text-slate-400'>@DragonBall_190</span>
                                        <p className='text-sm'>
                                            Fast delivery and everything worked perfectly. Great seller, highly recommended for anyone looking to upgrade their game account!
                                        </p>
                                    </div>
                                    <div className='hidden 2xl:flex flex-col gap-4 bg-white rounded-xl px-4 py-6 max-w-[300px]'>
                                        <span className='text-sm text-slate-400'>20 May</span>
                                        <div className='flex gap-2'>
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                            <Icon className='w-6 h-6 text-slate-400' icon="star" />
                                        </div>
                                        <span className='text-sm text-slate-400'>@DragonBall_190</span>
                                        <p className='text-sm'>
                                            Fast delivery and everything worked perfectly. Great seller, highly recommended for anyone looking to upgrade their game account!
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </section>

                    <section className='max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:w-[50%] lg:h-full'>
                        <Card title='History'
                            header={
                                <div className='flex items-center'>
                                    <button className='px-4 py-2 text-violet-600 bg-violet-200 rounded-full  text-sm whitespace-nowrap font-medium'>Purchases</button>
                                    <button className='px-4 py-2 text-slate-500 rounded-full whitespace-nowrap text-sm  font-medium'>Sales</button>
                                </div>
                            }>
                            <div className='flex flex-col gap-6'>
                                <div className='flex items-center justify-between'>
                                    <Text size="sm" className='w-[55%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                                    <div className='w-[20%] flex-shrink-0 flex gap-1 items-center text-violet-800'>
                                        <span className='text-sm'>
                                            - 27
                                        </span>
                                        <Icon icon="flash" className='w-4 h-4' />
                                    </div>
                                    <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <Text size="sm" className='w-[55%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                                    <div className='w-[20%] flex-shrink-0 flex gap-1 items-center text-violet-800'>
                                        <span className='text-sm'>
                                            - 27
                                        </span>
                                        <Icon icon="flash" className='w-4 h-4' />
                                    </div>
                                    <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <Text size="sm" className='w-[55%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                                    <div className='w-[20%] flex-shrink-0 flex gap-1 items-center text-violet-800'>
                                        <span className='text-sm'>
                                            - 27
                                        </span>
                                        <Icon icon="flash" className='w-4 h-4' />
                                    </div>
                                    <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                                </div>

                            </div>
                        </Card>
                    </section>
                </div>

                <section className='container px-4 mx-auto mt-8'>
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xl lg:text-2xl font-medium"  >
                            Your offers
                        </h3>
                        <div className="w-full overflow-x-scroll no-scrollbar">
                            <div className="flex items-center gap-4">
                                <Dropdown title='Sort by' />
                            </div>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mb-32">
                            {offers.map(({ id, imageUrl, title, description, price }) => (
                                <OfferCard key={id} id={id} link={`/edit/${id}`} image={imageUrl} title={title} description={description} price={price} authorName={userData.name} authorProfileImage={userData.avatarUrl} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Navigation />
        </>
    )
}

export default ProfilePage;