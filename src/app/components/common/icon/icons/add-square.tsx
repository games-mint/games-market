type Props = {
    className?: string
}

const AddSquareIcon = ({ className }: Props) => {

    return (
        <svg className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 12H16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.25 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.25 22H15.25C20.25 22 22.25 20 22.25 15V9C22.25 4 20.25 2 15.25 2H9.25C4.25 2 2.25 4 2.25 9V15C2.25 20 4.25 22 9.25 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )

}

export default AddSquareIcon;