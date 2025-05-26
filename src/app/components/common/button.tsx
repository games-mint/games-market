import { ReactNode } from "react"
import { Icons } from "./icon/types"
import Icon from "./icon"

type Props = {
    children?: ReactNode,
    icon?: Icons,
    type?: 'primary' | 'secondary' | 'alt',
    className?: string,
}


const Button = ({ children, icon, type = "primary", className }: Props) => {
    return (
        <button className={`px-6 gap-2 py-3 text-base flex items-center justify-between font-medium rounded-full ${className}
        ${type === "primary" ? "bg-violet-600 text-white" : type === "secondary" ? "bg-slate-200 text-slate-700" : "bg-white text-violet-600"}
        `}>
            {children}
            {icon ? <Icon className="w-6 h-6" icon={icon} /> : null}
        </button>
    )
}

export default Button;