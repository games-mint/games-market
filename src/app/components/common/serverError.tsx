import Icon from "./icon"

type Props = {
    serverError: string,
    onClose: () => void
}

const ServerError = ({ serverError, onClose }: Props) => {
    return (
        <div className="fixed min-w-[250px] z-50  mx-auto right-4 top-4 flex gap-4 justify-between items-center px-6 py-3 bg-red-200 rounded-xl">
            <div className="flex items-center gap-2">
                <Icon icon="warning" className="text-red-600 w-5 h-5 flex-shrink-0" />
                <span className="text-base text-red-600">{serverError}</span>
            </div>
            <button className="flex-shrink-0" onClick={onClose}>
                <Icon icon="close-circle" className="w-5 h-5 text-slate-500" />
            </button>
        </div>
    )
}

export default ServerError