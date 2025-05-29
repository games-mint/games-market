
import Card from '@/app/components/common/card';
import Icon from '@/app/components/common/icon';
import Text from '@/app/components/common/text';
import Title from '@/app/components/common/title';
import Featured from '@/app/components/featured';
import OfferCard from '@/app/components/offerCard';
import { db } from '@/db';
import { posts, profiles } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Image from 'next/image';


const SellerPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {

    const { id } = await params;

    const users = await db.select().from(profiles).where(eq(profiles.id, id));
    const user = users[0];
    const offers = (await db.select().from(posts).where(eq(posts.authorId, id)).leftJoin(profiles, eq(profiles.id, posts.authorId))).map(el => ({ offer: el.posts!, seller: el.profiles! }))

    return (
        <>
            <section className="container px-4 mx-auto pt-10">
                <div className="flex items-center gap-4">
                    {user.avatarUrl ?
                        (
                            <div className="relative w-16 h-16 rounded-full overflow-clip">
                                <Image className="object-cover" src="/profile-image.png" fill alt="profile image" />
                            </div>
                        ) :
                        (
                            <div className="relative w-16 h-16 rounded-full overflow-clip bg-slate-300" />
                        )}
                    <div className='flex flex-col gap-2'>
                        <Title className='text-slate-700' size='h3'>
                            {user.name}
                        </Title>
                        <Text className='text-slate-500'>
                            from {user.createdAt.toDateString()}
                        </Text>
                    </div>
                </div>
            </section>


            <div className='lg:container lg:px-4 lg:mx-auto lg:mt-16 lg:flex lg:gap-4 lg:justify-between'>
                <section className='max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:w-[50%]'>
                    <Card expandable title='Reviews' >
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
                            {/* <button className='flex items-center gap-4 px-6 py-3 text-white bg-violet-600 rounded-full w-fit'>
                                <span className='font-medium'>Leave a review</span>
                                <Icon className='w-6 h-6' icon='like-tag' />
                            </button> */}
                        </div>
                    </Card>
                </section>

                <section className='max-lg:container max-lg:px-4 max-lg:mx-auto max-lg:mt-8 lg:w-[50%] lg:max-w-[500px]'>
                    <Card title='Sales History' expandable>
                        <div className='flex flex-col gap-6'>
                            <div className='flex items-center justify-between'>
                                <Text className='w-[70%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                                <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                            </div>
                            <div className='flex items-center justify-between'>
                                <Text className='w-[70%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                                <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                            </div>
                            <div className='flex items-center justify-between'>
                                <Text className='w-[70%] flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden'>1x Dota 2 Account with skins</Text>
                                <Text size="xs" className='w-[25%] text-violet-600 flex-shrink-0 text-end'>21 May 23:41</Text>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>


            <section className='container px-4 mx-auto mt-8'>
                <Featured title='Author choice' />
            </section>

            <section className='container px-4 mx-auto mt-8'>
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-medium" >
                        Green_Dragon_3’s offers
                    </h3>
                    <div className="w-full overflow-x-scroll no-scrollbar">
                        <div className="flex items-center gap-4">
                            {/* <Dropdown title='Sort by' /> */}
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

export default SellerPage;