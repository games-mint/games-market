import Icon from "./icon";

type Props = {
    placeholder?: string,
    className?: string
}

const Select = ({ placeholder, className }: Props) => {
    return (
        <div className="flex items-center justify-between gap-2 px-4 py-3 rounded-full border border-slate-300 bg-white">
            <input placeholder={placeholder} className={`w-full placeholder:text-slate-500 text-base text-slate-900 outline-none  ${className}`} />
            <Icon icon="arrow-circle-down" className="w-6 h-6 text-slate-300" />
        </div>
    )
}

export default Select;