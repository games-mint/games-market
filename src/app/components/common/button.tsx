import { ReactNode } from "react"
import { Icons } from "./icon/types"
import Icon from "./icon"

type Props = {
    children?: ReactNode,
    icon?: Icons,
    type?: 'primary' | 'secondary' | 'alt' | 'danger',
    className?: string,
    buttonType?: 'button' | 'submit',
    disabled?: boolean,
    onClick?: () => void,
}


const Button = ({ children, icon, type = "primary", buttonType = "button", disabled, className, onClick }: Props) => {
    return (
        <button onClick={onClick} disabled={disabled} type={buttonType} className={`px-6 gap-2 py-3 text-base flex items-center justify-between font-medium rounded-full ${className}
        ${type === "primary" ? "bg-violet-600 text-white disabled:bg-violet-200" : type === "secondary" ? "bg-slate-200 text-slate-700" : type === "alt" ? "bg-white text-violet-600" : "bg-red-500 text-white"}
        `}>
            {children}
            {icon ? <Icon className="w-6 h-6" icon={icon} /> : null}
        </button>
    )
}

export default Button;