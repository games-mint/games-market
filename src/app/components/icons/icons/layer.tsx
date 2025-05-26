type Props = {
    className?: string
}

const LayerIcon = ({ className }: Props) => {

    return (
        <svg className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.51 2.92007L19.41 5.54007C21.11 6.29007 21.11 7.53007 19.41 8.28007L13.51 10.9001C12.84 11.2001 11.74 11.2001 11.07 10.9001L5.17002 8.28007C3.47002 7.53007 3.47002 6.29007 5.17002 5.54007L11.07 2.92007C11.74 2.62007 12.84 2.62007 13.51 2.92007Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 11C3.5 11.84 4.13 12.81 4.9 13.15L11.69 16.17C12.21 16.4 12.8 16.4 13.31 16.17L20.1 13.15C20.87 12.81 21.5 11.84 21.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 16C3.5 16.93 4.05 17.77 4.9 18.15L11.69 21.17C12.21 21.4 12.8 21.4 13.31 21.17L20.1 18.15C20.95 17.77 21.5 16.93 21.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    )

}

export default LayerIcon;