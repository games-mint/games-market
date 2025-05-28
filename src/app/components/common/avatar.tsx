import Image from 'next/image';

type Props = {
    url?: string | null,
    size?: 'base' | 'xl',
    className?: string
}

const Avatar = ({ url, size = 'base', className }: Props) => (
    <div className={`relative ${size === 'base' ? "w-6 h-6" : "w-16 h-16"} rounded-full overflow-clip ${className}`}>
        {url ? (
            <Image className="object-cover" src={url} fill alt="profile image" />
        ) : <div className='bg-slate-300 w-full h-full' />}
    </div>
)

export default Avatar;