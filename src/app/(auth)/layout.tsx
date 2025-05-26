import Image from "next/image"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const AuthLayout = ({ children }: Props) => (
    <main>
        <div className="hidden lg:block w-[250px] xl:w-[300px] 2xl:w-[400px] absolute left-0 top-0 h-screen">
            <Image className="object-cover" src="/background-1.png" alt="background image" fill />
        </div>
        <div className=" h-screen flex items-center justify-center">
            {children}
        </div>
    </main>
)

export default AuthLayout;