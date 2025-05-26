import Icon from "../components/common/icon";
import Text from '@/app/components/common/text';

const WalletPage = () => {
    return (
        <>

            <section className="container px-4 mx-auto pt-10">
                <h3 className="text-xl lg:text-2xl font-medium">Wallet overview</h3>
            </section>

            <section className="container px-4 mx-auto mt-8">
                <div className="p-4 flex flex-col items-center gap-16 rounded-2xl bg-gradient-to-b from-violet-600 to-fuchsia-500 text-white max-w-[400px] mx-auto lg:mx-0">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-base font-medium">Your balance</h4>
                        <div className="flex gap-2 items-center">
                            <span className="text-4xl">324</span>
                            <Icon icon="flash" className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <button className="px-4 py-3 flex items-center gap-2 text-violet-600 bg-white rounded-full">
                            <span className="text-sm font-medium">Top up balance</span>
                            <Icon icon="import" className="w-6 h-6" />
                        </button>
                        <button className="px-4 py-3 flex items-center gap-2 text-violet-600 bg-white rounded-full">
                            <span className="text-sm font-medium">Withdraw</span>
                            <Icon icon="export" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </section>


            <section className='container px-4 mx-auto mt-8 mb-32 lg:mt-16'>
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl lg:text-2xl font-medium" >
                        Payment history
                    </h3>

                    <div className='bg-slate-100 p-4 flex flex-col gap-6 rounded-xl'>
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
                </div>
            </section>
        </>
    )
}

export default WalletPage;