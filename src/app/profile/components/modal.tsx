import Input from "@/app/components/common/input"
import AvatarUploader from "./avatarUploader"
import TextArea from "@/app/components/common/textarea"
import Button from "@/app/components/common/button"
import { useState } from "react"
import { Profile } from "@/common/types"
import { removeUser, updateProfile } from "@/app/actions/profile"
import Icon from "@/app/components/common/icon"
import { uploadImage } from "@/app/actions/images/uploadImage"
import { removeImage } from "@/app/actions/images/removeImage"


type Props = {
    profile: Profile,
    closeModal: () => void
}

const EditProfileModal = ({ profile, closeModal }: Props) => {
    const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);
    const [avatarFilename, setAvatarFilename] = useState<string | null>(null);

    const [bio, setBio] = useState(profile.bio);
    const [serverError, setServerError] = useState<string | null>(null);

    const update = async () => {
        // uploading new image
        const isNewImage = avatarUrl !== null && avatarFilename !== null;
        const oldImage = profile.avatarUrl;
        let avatar = profile.avatarUrl;

        if (isNewImage) {
            const imageblob = await fetch(avatarUrl).then(r => r.blob());
            const { error, data: serverData } = await uploadImage(imageblob, `${profile.name}_${avatarFilename}`);

            if (error || serverData === null) {
                setServerError("Error while uploading image")
                return;
            }

            avatar = serverData.path;

            if (oldImage !== null) {
                const { error } = await removeImage(oldImage)

                if (error || serverData === null) {
                    setServerError("Error while uploading image")
                    return;
                }

            }
        }

        const { error } = await updateProfile({ bio, avatarUrl: avatar });

        if (error) {
            switch (error.code) {
                case "unauthorized":
                    setServerError("You are not authorised for this action")
                    break;
                case "server_error":
                default:
                    setServerError("Server error");
            }
            return;
        }

        closeModal();
    }

    const remove = async () => {
        const { error } = await removeUser();

        if (error) {
            switch (error.code) {
                case "unauthorized":
                    setServerError("You are not authorised for this action")
                    break;
                case "server_error":
                default:
                    setServerError("Server error");
            }
            return;
        }

        closeModal();
    }

    return (
        <>

            {serverError !== null
                ?
                <div className="fixed min-w-[250px]  mx-auto right-4 top-16 flex gap-4 justify-between items-center px-6 py-3 bg-red-200 rounded-xl">
                    <div className="flex items-center gap-2">
                        <Icon icon="warning" className="text-red-600 w-5 h-5 flex-shrink-0" />
                        <span className="text-base text-red-600">{serverError}</span>
                    </div>
                    <button type="button" className="flex-shrink-0" onClick={() => setServerError(null)}>
                        <Icon icon="close-circle" className="w-5 h-5 text-slate-500" />
                    </button>
                </div>
                : null
            }

            <div className=" fixed left-0 top-0 z-30 w-full h-screen overflow-y-scroll bg-black/25 px-4 py-4">
                <div className="relative max-w-[650px] px-3 py-6 flex items-center flex-col gap-8 mx-auto mt-8 bg-white w-full rounded-2xl sm:px-6 sm:py-8 sm:gap-16">
                    <h3 className="text-xl lg:text-2xl">Profile</h3>
                    <div className="flex flex-col gap-6 items-center w-full sm:flex-row sm:items-start">
                        <AvatarUploader url={avatarUrl} className="flex-shrink-0"
                            onChange={(url, filename) => {
                                setAvatarUrl(url);
                                setAvatarFilename(filename)
                            }}
                        />
                        <div className="flex flex-col gap-6 w-full">
                            <Input className="w-full" value={profile.name} disabled />
                            <TextArea className="w-full" value={bio} onChange={setBio} placeholder="Bio" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full sm:flex-row sm:justify-between">
                        <div className="flex justify-between sm:order-2 sm:gap-6">
                            <Button onClick={close} type="secondary">Cancel</Button>
                            <Button onClick={update}>Update profile</Button>
                        </div>
                        <Button onClick={remove} className="sm:order-1" type="danger" icon="trash"  >Delete account</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfileModal;