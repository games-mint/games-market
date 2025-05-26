import { ReactNode } from "react"
import { Icons } from "./icon/types"
import Icon from "./icon"

type Props = {
    children: ReactNode
}

export const TabGroup = ({ children }: Props) => {
    return (
        <div className="w-full overflow-x-scroll no-scrollbar">
            <div className="flex items-center bg-slate-100 rounded-full w-max">
                {children}
            </div>
        </div>
    )
}

export const Tab = ({ active, icon, children }: { active?: boolean, icon?: Icons, children: ReactNode }) => {
    return (
        <button className={`px-4 py-2 ${active ? "bg-violet-200 text-violet-800" : "text-slate-500"} rounded-full flex items-center gap-2 flex-shrink-0 lg:px-6`}>
            {icon ? <Icon icon={icon} className="w-4 h-4 lg:w-6 lg:h-6" /> : null}
            <span className="text-xs lg:text-sm">
                {children}
            </span>
        </button>
    )
}