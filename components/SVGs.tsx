export const DashboardSVG = (props: any) => {
    const {color} = props
    return (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 12.5L10 20" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 15V20" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10V20" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3.75" y="5" width="22.5" height="20" rx="2" stroke={color}/>
    </svg>)
}

export const ProfileSVG = (props: any) => {
    const {color} = props
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M24.6593 25.5589C24.0895 23.9641 22.8341 22.5549 21.0876 21.5499C19.3412 20.5448 17.2013 20 15 20C12.7987 20 10.6588 20.5448 8.91239 21.5498C7.16595 22.5549 5.91049 23.9641 5.34074 25.5589"
            stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="15" cy="10" r="5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
}

export const CreateSVG = (props: any) => {
    const {color} = props
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7.5L15 22.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M22.5 15L7.5 15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>

}

export const LearnSVG = (props: any) => {
    const {color} = props
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.5 26.25L7.26365 22.4684C6.71436 13.6797 13.6942 6.25 22.5 6.25V6.25L20.9783 7.46734C20.7587 7.64301 20.6489 7.73085 20.5461 7.81695C17.895 10.0368 16.3303 13.2924 16.253 16.7493C16.25 16.8834 16.25 17.024 16.25 17.3052V17.3052C16.25 17.529 16.25 17.641 16.246 17.7298C16.1393 20.1299 13.9557 21.8952 11.5865 21.4966C11.4988 21.4819 11.3894 21.4584 11.1705 21.4115L7.5 20.625"
            stroke={color} strokeWidth="2"/>
    </svg>
}

export const MadeSVG = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.5479 7.26648C20.2473 6.41159 20.1213 5.15154 19.2664 4.45208C18.4116 3.75263 17.1515 3.87863 16.4521 4.73352L8.66615 14.2496L6.19997 12.4C5.31631 11.7373 4.06271 11.9163 3.39997 12.8C2.73723 13.6837 2.91631 14.9373 3.79997 15.6L7.03306 18.0248C8.31913 18.9894 10.1369 18.7687 11.1549 17.5245L19.5479 7.26648Z"
            stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
    </svg>
}

export const DayStreakSVG = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 9L13.9558 13.5662C13.5299 14.2051 12.5728 14.1455 12.2294 13.4587L11.7706 12.5413C11.4272 11.8545 10.4701 11.7949 10.0442 12.4338L7 17"
            stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#AAAAAA" strokeWidth="2"/>
    </svg>
}

export const LearnsetsSVG = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.5 5C16.9045 5 17.6067 5 18.1111 5.33706C18.3295 5.48298 18.517 5.67048 18.6629 5.88886C19 6.39331 19 7.09554 19 8.5V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V8.5C5 7.09554 5 6.39331 5.33706 5.88886C5.48298 5.67048 5.67048 5.48298 5.88886 5.33706C6.39331 5 7.09554 5 8.5 5"
            stroke="#AAAAAA" strokeWidth="2"/>
        <path
            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
            stroke="#AAAAAA" strokeWidth="2"/>
        <path d="M9 12L15 12" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 16L13 16" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
    </svg>

}

export const PenSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.50808 18.7546L6.66256 18.2759C6.79945 18.0341 6.99207 17.8426 7.14424 17.6914C7.15805 17.6777 7.17153 17.6643 7.18461 17.6512L16.6287 8.20711C16.6415 8.19427 16.6543 8.18144 16.6672 8.16862C16.967 7.8687 17.2583 7.57723 17.531 7.36919C17.8384 7.13466 18.2363 6.91421 18.75 6.91421C19.2637 6.91421 19.6616 7.13466 19.969 7.36919C20.2417 7.57724 20.5331 7.86871 20.8329 8.16864C20.8457 8.18145 20.8585 8.19427 20.8713 8.20711L21.7929 9.12868C21.8057 9.14151 21.8186 9.15433 21.8314 9.16714C22.1313 9.46694 22.4228 9.75831 22.6308 10.031C22.8653 10.3384 23.0858 10.7363 23.0858 11.25C23.0858 11.7637 22.8653 12.1616 22.6308 12.469C22.4228 12.7417 22.1313 13.033 21.8314 13.3328C21.8186 13.3456 21.8057 13.3585 21.7929 13.3713L21.7929 13.3713L12.3488 22.8154C12.3357 22.8285 12.3223 22.842 12.3086 22.8558C12.1574 23.0079 11.9659 23.2005 11.7242 23.3374L7.50808 18.7546ZM7.50808 18.7546L6.66256 18.2759C6.52568 18.5176 6.46061 18.7813 6.40921 18.9896C6.40454 19.0085 6.39999 19.027 6.3955 19.0449L5.48197 22.699C5.47917 22.7102 5.47624 22.7219 5.47323 22.7339C5.43641 22.8803 5.3854 23.0833 5.36783 23.2629C5.34761 23.4696 5.34093 23.9215 5.70971 24.2903L6.41682 23.5832M7.50808 18.7546L6.41682 23.5832M6.41682 23.5832L5.70971 24.2903C6.07849 24.6591 6.53045 24.6524 6.73714 24.6322M6.41682 23.5832L6.73714 24.6322M6.73714 24.6322C6.91676 24.6146 7.11968 24.5636 7.26617 24.5268M6.73714 24.6322L7.26617 24.5268M7.26617 24.5268C7.27817 24.5238 7.28979 24.5208 7.30099 24.518M7.26617 24.5268L7.30099 24.518M7.30099 24.518L10.9551 23.6045M7.30099 24.518L10.9551 23.6045M10.9551 23.6045C10.973 23.6 10.9915 23.5955 11.0104 23.5908M10.9551 23.6045L11.0104 23.5908M11.0104 23.5908C11.2187 23.5394 11.4824 23.4743 11.7241 23.3374L11.0104 23.5908Z"
            stroke="#AAAAAA" strokeWidth="2"/>
        <path d="M15.625 9.375L19.375 6.875L23.125 10.625L20.625 14.375L15.625 9.375Z" fill="#AAAAAA"/>
    </svg>
}

export const PlusSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7.5L15 22.5" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22.5 15L7.5 15" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round"/>
    </svg>
}

export const DarkPlusSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7.5L15 22.5" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22.5 15L7.5 15" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
    </svg>
}

export const ProfileIconSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22.2444 25.8824C21.8171 24.5534 20.8755 23.3791 19.5657 22.5415C18.2559 21.704 16.651 21.25 15 21.25C13.349 21.25 11.7441 21.704 10.4343 22.5415C9.12446 23.3791 8.18287 24.5534 7.75556 25.8824"
            stroke="#AAAAAA" strokeWidth="2"/>
        <circle cx="15" cy="12.5" r="3.75" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <rect x="3.5" y="3.5" width="23" height="23" rx="3" stroke="#AAAAAA" strokeWidth="2"/>
    </svg>

}

export const BigUserSVG = () => {
    return <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M82.1976 85.1962C80.2984 79.8804 76.1136 75.1831 70.2921 71.8328C64.4707 68.4826 57.3379 66.6667 50.0001 66.6667C42.6623 66.6667 35.5295 68.4826 29.708 71.8328C23.8866 75.183 19.7017 79.8803 17.8026 85.1962"
            stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="49.9999" cy="33.3333" r="16.6667" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
    </svg>

}

export const LupeSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13.75" cy="13.75" r="8.75" stroke="#AAAAAA" strokeWidth="2"/>
        <path d="M13.75 10C13.2575 10 12.7699 10.097 12.3149 10.2855C11.86 10.4739 11.4466 10.7501 11.0983 11.0983C10.7501 11.4466 10.4739 11.86 10.2855 12.3149C10.097 12.7699 10 13.2575 10 13.75" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M25 25L21.25 21.25" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
    </svg>

}

export const TrashSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 18.75L12.5 15" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17.5 18.75L17.5 15" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M3.75 8.75H26.25V8.75C24.6063 8.75 23.7844 8.75 23.2312 9.20398C23.1299 9.28709 23.0371 9.37995 22.954 9.48121C22.5 10.0344 22.5 10.8563 22.5 12.5V21C22.5 22.8856 22.5 23.8284 21.9142 24.4142C21.3284 25 20.3856 25 18.5 25H11.5C9.61438 25 8.67157 25 8.08579 24.4142C7.5 23.8284 7.5 22.8856 7.5 21V12.5C7.5 10.8563 7.5 10.0344 7.04602 9.48121C6.96291 9.37995 6.87005 9.28709 6.76879 9.20398C6.21561 8.75 5.39374 8.75 3.75 8.75V8.75Z" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12.5852 4.21324C12.7276 4.08034 13.0415 3.96291 13.4781 3.87915C13.9147 3.7954 14.4497 3.75 15 3.75C15.5503 3.75 16.0853 3.7954 16.5219 3.87915C16.9585 3.96291 17.2724 4.08034 17.4148 4.21324" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round"/>
    </svg>

}

export const XSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 7.5L7.5 22.5" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.5 7.5L22.5 22.5" stroke="#DDDDDD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

}

export const ArrowDownSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 11.25L15 18.75L7.5 11.25" stroke="#DDDDDD" strokeWidth="2"/>
    </svg>
}

export const CardsSVG = () => {
    return <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2C0 0.89543 0.895431 0 2 0H24C25.1046 0 26 0.895431 26 2V16C26 17.1046 25.1046 18 24 18H2C0.89543 18 0 17.1046 0 16V2Z" fill="#D1D1D1"/>
        <path d="M4 7C4 5.89543 4.89543 5 6 5H28C29.1046 5 30 5.89543 30 7V21C30 22.1046 29.1046 23 28 23H6C4.89543 23 4 22.1046 4 21V7Z" fill="#7E7E7E"/>
    </svg>
}

export const ChoiceSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="7.5" height="7.5" rx="1" stroke="#DDDDDD" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="5" y="17.5" width="7.5" height="7.5" rx="1" stroke="#DDDDDD" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="17.5" y="17.5" width="7.5" height="7.5" rx="1" stroke="#DDDDDD" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="17.5" y="5" width="7.5" height="7.5" rx="1" fill="#DDDDDD" stroke="#DDDDDD" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
}

export const StarSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6795 8.28448C13.6627 5.83323 14.1543 4.6076 14.9998 4.6076C15.8452 4.6076 16.3368 5.83323 17.32 8.28448L17.3658 8.39862C17.9213 9.78346 18.1991 10.4759 18.7651 10.8967C19.3312 11.3176 20.0743 11.3841 21.5604 11.5172L21.8291 11.5413C24.2613 11.7591 25.4775 11.868 25.7377 12.6418C25.9979 13.4155 25.0948 14.2372 23.2885 15.8805L22.6856 16.429C21.7712 17.2609 21.314 17.6769 21.1009 18.222C21.0612 18.3237 21.0282 18.4279 21.002 18.5339C20.862 19.1022 20.9958 19.7057 21.2636 20.9125L21.3469 21.2881C21.839 23.5061 22.0851 24.615 21.6555 25.0934C21.495 25.2721 21.2863 25.4008 21.0545 25.464C20.4343 25.6333 19.5537 24.9157 17.7925 23.4806C16.636 22.5382 16.0578 22.0671 15.3939 21.9611C15.1328 21.9194 14.8667 21.9194 14.6056 21.9611C13.9417 22.0671 13.3635 22.5382 12.207 23.4806C10.4458 24.9157 9.56521 25.6333 8.94496 25.464C8.71318 25.4008 8.50455 25.2721 8.34402 25.0934C7.91442 24.615 8.16046 23.5061 8.65256 21.2881L8.7359 20.9125C9.00366 19.7057 9.13754 19.1022 8.99748 18.5339C8.97135 18.4279 8.9383 18.3237 8.89855 18.222C8.68546 17.6769 8.22827 17.2609 7.31389 16.429L6.71103 15.8805C4.90473 14.2372 4.00158 13.4155 4.2618 12.6418C4.52202 11.868 5.73816 11.7591 8.17042 11.5413L8.4391 11.5172C9.92524 11.3841 10.6683 11.3176 11.2344 10.8967C11.8004 10.4759 12.0782 9.78346 12.6337 8.39862L12.6795 8.28448Z" stroke="#AAAAAA" strokeWidth="2"/>
    </svg>
}

export const FilledStarSVG = () => {
    return <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6795 8.28448C13.6627 5.83323 14.1543 4.6076 14.9998 4.6076C15.8452 4.6076 16.3368 5.83323 17.32 8.28448L17.3658 8.39862C17.9213 9.78346 18.1991 10.4759 18.7651 10.8967C19.3312 11.3176 20.0743 11.3841 21.5604 11.5172L21.8291 11.5413C24.2613 11.7591 25.4775 11.868 25.7377 12.6418C25.9979 13.4155 25.0948 14.2372 23.2885 15.8805L22.6856 16.429C21.7712 17.2609 21.314 17.6769 21.1009 18.222C21.0612 18.3237 21.0282 18.4279 21.002 18.5339C20.862 19.1022 20.9958 19.7057 21.2636 20.9125L21.3469 21.2881C21.839 23.5061 22.0851 24.615 21.6555 25.0934C21.495 25.2721 21.2863 25.4008 21.0545 25.464C20.4343 25.6333 19.5537 24.9157 17.7925 23.4806C16.636 22.5382 16.0578 22.0671 15.3939 21.9611C15.1328 21.9194 14.8667 21.9194 14.6056 21.9611C13.9417 22.0671 13.3635 22.5382 12.207 23.4806C10.4458 24.9157 9.56521 25.6333 8.94496 25.464C8.71318 25.4008 8.50455 25.2721 8.34402 25.0934C7.91442 24.615 8.16046 23.5061 8.65256 21.2881L8.7359 20.9125C9.00366 19.7057 9.13754 19.1022 8.99748 18.5339C8.97135 18.4279 8.9383 18.3237 8.89855 18.222C8.68546 17.6769 8.22827 17.2609 7.31389 16.429L6.71103 15.8805C4.90473 14.2372 4.00158 13.4155 4.2618 12.6418C4.52202 11.868 5.73816 11.7591 8.17042 11.5413L8.4391 11.5172C9.92524 11.3841 10.6683 11.3176 11.2344 10.8967C11.8004 10.4759 12.0782 9.78346 12.6337 8.39862L12.6795 8.28448Z" fill="#AAAAAA" stroke="#AAAAAA" strokeWidth="2"/>
    </svg>
}

export const BackSVG = () => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
    >
        <polyline points="15 18 9 12 15 6"/>
    </svg>
}