import Icon from "./icon";
import { Icons } from "./icon/types";

type Props = {
    placeholder?: string,
    className?: string,
    icon?: Icons,
    type?: 'text' | 'password' | 'email'
}

const Input = ({ placeholder, icon, type = 'text', className }: Props) => {
    return (
        <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-full border border-slate-300 bg-white">
            <input type={type} placeholder={placeholder} className={`w-full placeholder:text-slate-500 text-base text-slate-900 outline-none ${className}`} />
            {icon ? <Icon icon={icon} className="w-6 h-6 text-violet-600" /> : null}
        </div>
    )
}

export default Input;