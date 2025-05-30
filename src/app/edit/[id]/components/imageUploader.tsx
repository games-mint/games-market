import Icon from "@/app/components/common/icon"
import { useRef } from "react";

type Props = {
    url?: string,
    onChange: (url: string, filename: string) => void,
}

const ImageUploader = ({ url, onChange }: Props) => {
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

    const imageLoaded = url !== undefined;


    return (
        <div onClick={click} className="group relative w-full aspect-[3/2] rounded-2xl flex bg-slate-100 items-center justify-center lg:w-[50%] cursor-pointer">
            <div className={`flex flex-col gap-4 items-center justify-center ${imageLoaded ? "group-hover:opacity-100 bg-slate-100 opacity-0" : ""} transition-all px-4 py-2 relative z-10 text-slate-400 rounded-2xl`}>
                <Icon className="w-9 h-9" icon="arrow-sqare-up" />
                <span className="text-base">Upload Image</span>
            </div>
            {imageLoaded ? (
                <div className="absolute w-full h-full left-0 top-0 ">
                    <img src={url} alt="uploaded image" className="w-full h-full object-cover rounded-2xl" />
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

export default ImageUploader;