'use client'
import Text from '@/app/components/common/text';
import Icon from '@/app/components/common/icon';
import Title from '../components/common/title';
import Card from '../components/common/card';
import OfferCard from '../components/offerCard';
import { FullDealDetails, Offer, Profile, Review } from '@/common/types';
import Avatar from '../components/common/avatar';
import EditProfileModal from './components/modal';
import { useState } from 'react';
import { ProfileHeader } from '../components/header';
import Navigation from '../components/navigation';
import OrdersCard from './components/orders';
import DealsCard from './components/deals';
import ReviewCard from '../sellers/[id]/components/reviewCard';
import ReviewsModal from '../components/common/modals/reviewsModal';





type Props = {
    userData: Profile,
    offers: { offer: Offer, seller: Profile }[],
    deals: FullDealDetails[],
    orders: FullDealDetails[],
    reviews: {
        review: Review,
        author: Profile
    }[]
}

const ProfilePage = ({ userData, offers, deals, orders, reviews }: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [showReviewsModal, setShowReviewsModal] = useState(false);

    return (
        <>
            <ProfileHeader openModal={() => setShowModal(true)} />
            <main className="mt-[72px] lg:w-[calc(100vw_-_320px)] lg:ml-auto">

                {showModal
                    ? <EditProfileModal closeModal={() => setShowModal(false)} profile={userData} />
                    : null}

                {showReviewsModal
                    ? <ReviewsModal closeModal={() => setShowReviewsModal(false)} reviews={reviews} />
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
                        <OrdersCard orders={orders} />
                    </section>

                    <section className='max-lg:container max-lg:mx-auto max-lg:px-4 max-lg:mt-8 lg:w-[50%]'>
                        <DealsCard deals={deals} />
                    </section>
                </div>


                <div className='lg:flex lg:gap-4 lg:container lg:mx-auto lg:px-4 lg:mt-16'>
                    <section className='max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:w-[50%]'>
                        <Card onExpand={() => setShowReviewsModal(true)} expandable title='Last reviews' className='h-full' >
                            <div className='flex flex-col gap-8'>
                                <div className='flex items-center gap-2'>
                                    <Icon className='w-6 h-6 text-amber-500' icon="star" />
                                    <Title size="h1" className='text-slate-700'>{userData.rating}</Title>
                                    <Text size='sm' className='font-medium text-slate-700'>{reviews.length} reviews</Text>
                                </div>
                                <div className='flex gap-4'>
                                    {reviews.slice(0, 3).map((data, idx) => data.author === null
                                        ? null
                                        : <ReviewCard className={`${idx === 1 ? "hidden sm:flex lg:hidden xl:flex" : idx > 1 ? "hidden 2xl:flex" : ""} w-full`} key={data.review.id} review={data.review} author={data.author} />)
                                    }
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
                                {/* <Dropdown title='Sort by' /> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 mb-32">
                            {offers.map(({ offer, seller }) => (
                                <OfferCard key={offer.id} offer={offer} link={`/edit/${offer.id}`} seller={seller} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Navigation authorised />
        </>
    )
}

export default ProfilePage;