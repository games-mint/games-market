'use client'
import Button from "@/app/components/common/button"
import Input from "@/app/components/common/input"
import TextArea from "@/app/components/common/textarea"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { createOrUpdateOfferSchema } from "./scheme"
import { zodResolver } from "@hookform/resolvers/zod"
import ProductSelect from "./components/productSelect"
import ImageUploader from "./components/imageUploader"
import { createOrUpdatePost, removePost } from "@/app/actions/posts"
import { PostDataWithoutId } from "@/app/actions/types"
import { isEmpty } from "lodash"
import { uploadImage } from "@/app/actions/images/uploadImage"
import { removeImage } from "@/app/actions/images/removeImage"
import { useRouter } from "next/navigation"
import ServerError from "@/app/components/common/serverError"

type Props = {
    post?: {
        id: number,
        title: string,
        description: string,
        imageUrl: string,
        price: number,
        productId: number,
    }
}

const EditPage = ({ post }: Props) => {

    const router = useRouter();

    const defaultValues = post || {
        title: "",
        description: "",
        imageUrl: undefined,
        price: 0,
        productId: undefined,
    };
    const [serverError, setServerError] = useState<string | null>(null);
    const [imageFilename, setImageFilename] = useState<string | null>(null);
    const isNew = post === undefined;

    const {
        handleSubmit,
        control,
        formState,
        setError
    } = useForm<PostDataWithoutId>({
        mode: "onBlur",
        reValidateMode: 'onBlur',
        resolver: zodResolver(createOrUpdateOfferSchema),
        defaultValues
    })


    const onPublishOffer = async (data: PostDataWithoutId) => {
        // uploading image
        const isNewImage = imageFilename !== null;
        const oldImage = post?.imageUrl;

        let imageUrl = data.imageUrl;

        if (isNewImage) {
            const imageblob = await fetch(data.imageUrl).then(r => r.blob());
            const { error, data: serverData } = await uploadImage(imageblob, `${data.productId}_${imageFilename}`);

            if (error || serverData === null) {
                setServerError("Error while uploading image")
                return;
            }

            imageUrl = serverData.path;

            if (oldImage !== undefined) {
                const { error } = await removeImage(oldImage)

                if (error || serverData === null) {
                    setServerError("Error while uploading image")
                    return;
                }

            }
        }

        publishOffer({ ...data, imageUrl });
    }

    const publishOffer = async (data: PostDataWithoutId) => {
        const { serverError, validationError } = await createOrUpdatePost({ ...data, id: post?.id });

        if (validationError)
            validationError.forEach(err => {
                setError(err.field, { type: err.code })
            })

        if (serverError) {
            switch (serverError.code) {
                case "not_authenticated":
                    setServerError("You are not authorised for this action")
                    break;
                case "server_error":
                default:
                    setServerError("Server error");
            }
        } else {
            setServerError(null);
        }
    }


    const removeOffer = async () => {
        if (post?.id === undefined) return;

        const { error } = await removePost(post.id);

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

        // TODO add removing image from storage

    }

    const formDisabled = !isEmpty(formState.errors) || formState.isLoading || formState.isSubmitting;

    return (
        <>
            {serverError !== null
                ?
                <ServerError serverError={serverError} onClose={() => setServerError(null)} />
                : null
            }

            <section className="container px-4 mx-auto pt-10">
                <h3 className="text-xl lg:text-2xl font-medium">Edit</h3>
            </section>

            <section className="container px-4 mx-auto mt-8 lg:mt-16 mb-32">
                <form onSubmit={handleSubmit(onPublishOffer)} className="flex flex-col gap-8 lg:max-w-[900px]">
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
                        <div className="flex flex-col gap-6 lg:w-[50%]">
                            <Controller
                                control={control}
                                name="title"
                                render={({ field, fieldState: { error, isValidating } }) =>
                                    <Input loading={isValidating} error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : undefined} className="w-full" placeholder="Title" {...field} />
                                }
                            />

                            <Controller
                                control={control}
                                name="productId"
                                render={({ field, fieldState: { error } }) =>
                                    <ProductSelect error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : undefined}  {...field} />
                                }
                            />
                            <Controller
                                control={control}
                                name="description"
                                render={({ field, fieldState: { error } }) =>
                                    <TextArea error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : undefined} className="w-full" placeholder="Description" {...field} />
                                }
                            />

                            <Controller
                                control={control}
                                name="price"
                                render={({ field, fieldState: { error } }) =>
                                    <Input type="number" error={error !== undefined} errorStr={error?.type === "too_small" ? "Field is required" : undefined} icon="flash" className="w-full" placeholder="Price" {...field} />
                                }
                            />
                        </div>

                        <Controller
                            control={control}
                            name="imageUrl"
                            render={({ field: { value, onChange } }) =>
                                <ImageUploader url={value} onChange={(url, filename) => {
                                    onChange(url);
                                    setImageFilename(filename);
                                }} />
                            }
                        />

                    </div>

                    <div className="flex flex-col gap-12  items-center justify-between lg:flex-row ">
                        <div className="flex items-center justify-end gap-4 w-full lg:order-2">
                            <Button onClick={router.back} icon="close-circle" type="secondary" className="w-[50%] lg:w-[150px]">
                                Cancel
                            </Button>
                            <Button disabled={formDisabled} buttonType="submit" className="w-[50%] lg:w-[150px]" icon="arrow-right">
                                Publish
                            </Button>
                        </div>
                        {!isNew ? <Button onClick={removeOffer} type="danger" icon="trash" className="w-full lg:w-[150px] lg:order-1">
                            Remove
                        </Button> : null}
                    </div>


                </form>
            </section>
        </>
    )
}

export default EditPage;