import Button from "@/app/components/common/button"
import Icon from "@/app/components/common/icon"
import Input from "@/app/components/common/input"
import Select from "@/app/components/common/select"
import TextArea from "@/app/components/common/textarea"

const EditPage = () => {
    return (
        <>
            <section className="container px-4 mx-auto pt-10">
                <h3 className="text-xl lg:text-2xl font-medium">Edit</h3>
            </section>

            <section className="container px-4 mx-auto mt-8 lg:mt-16 mb-32">
                <div className="flex flex-col gap-8 lg:max-w-[900px]">
                    <div className="flex flex-col gap-8 lg:flex-row lg:gap-4">
                        <div className="flex flex-col gap-6 lg:w-[50%]">
                            <Input placeholder="Name" />
                            <Select placeholder="Category" />
                            <TextArea placeholder="Description" />
                            <Input icon="flash" placeholder="Price" />
                        </div>

                        <div className="w-full aspect-[3/2] bg-slate-100 rounded-2xl flex items-center justify-center lg:w-[50%]">
                            <div className="flex flex-col gap-4 items-center justify-center text-slate-400">
                                <Icon className="w-9 h-9" icon="arrow-sqare-up" />
                                <span className="text-base">Upload Image</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-end">
                        <Button type="secondary" className="sm:max-w-[250px] w-[50%]">
                            Cancel
                        </Button>
                        <Button className="sm:max-w-[300px] w-[50%]" icon="arrow-right">
                            Publish
                        </Button>
                    </div>


                </div>
            </section>
        </>
    )
}

export default EditPage;