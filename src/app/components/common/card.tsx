import { ReactNode } from "react"

type Props = {
    title: string,
    expandable?: boolean,
    children: ReactNode,
    header?: ReactNode,
    className?: string,
    onExpand?:() => void
}

const Card = ({ title, expandable = false, children, header, className, onExpand }: Props) => {
    return (
        <div className={`flex flex-col gap-8 p-4 bg-slate-100 rounded-xl ${className}`}>
            <div className='flex justify-between items-center'>
                <span className='text-base font-bold '>{title}</span>
                {header
                    ? header
                    : expandable
                        ? <button onClick={onExpand} className='text-base text-slate-700'>See all</button>
                        : null
                }

            </div>
            {children}
        </div>
    )
}

export default Card;