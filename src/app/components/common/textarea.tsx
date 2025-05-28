'use client'
import { ChangeEvent } from "react";

type Props = {
    value?: string | null,
    placeholder?: string,
    error?: boolean,
    errorStr?: string,
    disabled?: boolean,
    className?: string,
    onChange?: (value: string) => void,
    onBlur?: () => void,
    onFocus?: () => void,
}

const TextArea = ({ value, placeholder, error, errorStr, disabled, className, onBlur, onChange, onFocus }: Props) => {
    const change = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange === undefined) return;
        onChange(e.target.value);
    }


    return <div className={`flex flex-col gap-1 ${className}`}>
        <textarea value={value|| ""} onBlur={onBlur} onChange={change} onFocus={onFocus} placeholder={placeholder} className={`placeholder:text-slate-500 text-base text-slate-900 px-4 py-3 min-h-[120px] rounded-2xl border  ${disabled ? "bg-slate-100" : "bg-white"} ${error ? "border-red-500" : "border-slate-300"} outline-none`} />
        {errorStr
            ? <div className="flex gap-1 items-center pl-2">
                <span className="text-sm text-red-600">{errorStr}</span>
            </div>
            : null
        }
    </div>
}

export default TextArea;