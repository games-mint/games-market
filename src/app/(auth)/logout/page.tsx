import Button from "@/app/components/common/button"
import { signOutLocal } from "../actions/signout";

const LogoutPage = () => {
    return (
        <>
            <section className="container px-4 mx-auto text-center">
                <div className="max-w-[350px] mx-auto">
                    <h2 className="text-2xl mb-8 ">Sign out</h2>
                    <div className="flex flex-col gap-6">
                        <Button onClick={signOutLocal} icon="arrow-right">Sign out</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogoutPage;