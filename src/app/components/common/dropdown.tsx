import Icon from "./icon"

type Props = {
    title: string
}

const Dropdown = ({ title }: Props) => {
    return (
        <button className="px-4 py-2 bg-slate-200 flex items-center gap-4 text-slate-700 rounded-full flex-shrink-0 lg:px-6">
            <span className="text-xs lg:text-sm" >
                {title}
            </span>
            <Icon className="w-4 h-4" icon="arrow-circle-down" />
        </button>
    )
}

export default Dropdown;