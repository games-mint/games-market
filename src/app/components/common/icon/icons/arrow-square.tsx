type Props = {
    className?: string
}

export const ArrowSquareUpIcon = ({ className }: Props) => {

    return (
        <svg className={className} viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.285 3.5H11.715C6.255 3.5 3 6.755 3 12.215V24.77C3 30.245 6.255 33.5 11.715 33.5H24.27C29.73 33.5 32.985 30.245 32.985 24.785V12.215C33 6.755 29.745 3.5 24.285 3.5ZM25.23 16.73C24.795 17.165 24.075 17.165 23.64 16.73L19.125 12.215V27.5C19.125 28.115 18.615 28.625 18 28.625C17.385 28.625 16.875 28.115 16.875 27.5V12.215L12.36 16.73C11.925 17.165 11.205 17.165 10.77 16.73C10.545 16.505 10.44 16.22 10.44 15.935C10.44 15.65 10.56 15.35 10.77 15.14L17.205 8.705C17.415 8.495 17.7 8.375 18 8.375C18.3 8.375 18.585 8.495 18.795 8.705L25.23 15.14C25.665 15.575 25.665 16.28 25.23 16.73Z" fill="currentColor" />
        </svg>


    )

}



export const ArrowSquareDownIcon = ({ className }: Props) => {
    return (
        <ArrowSquareUpIcon className={`rotate-180 ${className}`} />

    )

}
