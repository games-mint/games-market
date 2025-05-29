
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useTransition } from "react"
import { Profile } from "@/common/types"
import { getCurrentProfile } from "@/app/actions/profile"

const HeaderAvatar = () => {
    const [profile, setProfile] = useState<Profile|null>(null);
    const [, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            const result = await getCurrentProfile();
            setProfile(result)
        })
    },[])

    if(profile === null)
        return;

    return (
        <div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center">
            <Link href="/profile" className="relative w-8 h-8 rounded-full overflow-clip">
                {profile.avatarUrl ? (
                    <Image className="object-cover" src={profile.avatarUrl} fill alt="profile image" />
                ) : <div className='bg-slate-300 w-full h-full' />}
            </Link>
        </div>
    )
}

export default HeaderAvatar;