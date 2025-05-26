import Game from "@/app/components/common/game";

const AppsPage = () => {
    return (
        <>
            <section className="container mx-auto px-4 pt-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-medium text-xl lg:text-2xl" >
                            All apps
                        </h3>

                        <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4">
                            <Game name="DOTA 2" image="/dota-2.png" />
                            <Game name="DOTA 2" image="/dota-2.png" />
                            <Game name="DOTA 2" image="/dota-2.png" />
                            <Game name="DOTA 2" image="/dota-2.png" />
                            <Game name="DOTA 2" image="/dota-2.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppsPage;