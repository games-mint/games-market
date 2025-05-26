type Props = {
    className?: string
}

const GameIcon = ({ className }: Props) => {

    return (
        <svg className={className} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.32 12.46L7.27002 15.51" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.29999 12.49L10.35 15.54" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.28 14H14.29" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.22 14H18.23" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.25 15.98V15.96" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.25 12.04V12.02" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.75 22H15.75C20.75 22 22.75 20 22.75 15V13C22.75 8 20.75 6 15.75 6H9.75C4.75 6 2.75 8 2.75 13V15C2.75 20 4.75 22 9.75 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.76 2L13.75 3.01C13.74 3.56 13.3 4 12.75 4H12.72C12.17 4 11.73 4.45 11.73 5C11.73 5.55 12.18 6 12.73 6H13.73" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )

}

export default GameIcon;