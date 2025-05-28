import Icon from "@/app/components/common/icon"
import Image from 'next/image';
import { useRef } from "react";

type Props = {
    url: string | null,
    onChange: (url: string, filename: string) => void,
    className?: string
}

const AvatarUploader = ({ url, onChange, className }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    const click = () => {
        if (ref.current === null)
            return;
        ref.current.click();
    }

    const onSelectFile = async () => {
        if (ref.current === null || ref.current.files === null) return;

        const uploadedFile = ref.current.files[0];
        if (!uploadedFile) return;

        const cachedURL = URL.createObjectURL(uploadedFile);
        onChange(cachedURL, uploadedFile.name);
    }

    const imageLoaded = url !== null;


    return (
        <div onClick={click} className={`group relative w-[150px] h-[150px] rounded-full flex bg-slate-100 items-center justify-center cursor-pointer ${className}`}>
            <div className={`flex flex-col gap-2 items-center justify-center ${imageLoaded ? "group-hover:z-20 group-hover:opacity-100 bg-slate-100 opacity-0" : ""} transition-all px-2 py-2 relative z-10 text-slate-400 rounded-2xl`}>
                <Icon className="w-6 h-6" icon="arrow-sqare-up" />
                <span className="text-base">Upload Image</span>
            </div>
            {imageLoaded ? (
                <div className="absolute w-full h-full left-0 top-0 z-10 rounded-full overflow-clip">
                    <Image className="object-cover" src={url} fill alt="profile image" />
                </div>
            ) : null}

            <input
                type="file"
                id="file"
                accept="image/png, image/jpeg"
                ref={ref}
                onChange={onSelectFile}
                hidden
            />
        </div>
    )
}

export default AvatarUploader;