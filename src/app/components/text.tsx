import { ReactNode } from "react"

type Props = {
    size?: 'xs' | 'sm' | 'base',
    className?: string,
    children: ReactNode
}

const Text = ({ size = 'base', className, children }: Props) => {
    switch (size) {
        case 'xs':
            return <p className={`text-xs ${className}`}>{children}</p>
        case 'sm':
            return <p className={`text-sm ${className}`}>{children}</p>
        case 'base':
            return <p className={`text-base ${className}`}>{children}</p>
    }
}

export default Text;