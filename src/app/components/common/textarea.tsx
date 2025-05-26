type Props = {
    placeholder?: string,
    className?: string
}

const TextArea = ({ placeholder, className }: Props) => {
    return <textarea placeholder={placeholder} className={`bg-white placeholder:text-slate-500 text-base text-slate-900 px-4 py-3 min-h-[120px] rounded-2xl border border-slate-300 outline-none ${className}`} />
}

export default TextArea;