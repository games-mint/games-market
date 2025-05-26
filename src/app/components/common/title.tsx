import { ReactNode } from "react"

type Props = {
    size: 'h1' | 'h2' | 'h3',
    className?: string,
    children: ReactNode,
}

const Title = ({ size, className, children}: Props) => {
    switch (size) {
        case 'h1':
            return <h1 className={`text-4xl ${className}`}>{children}</h1>
        case 'h2':
            return <h2 className={`text-2xl ${className}`}>{children}</h2>
        case 'h3':
            return <h2 className={`text-xl ${className}`}>{children}</h2>
    }
}

export default Title;