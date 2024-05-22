
export function Promo ({promoText, className}){
    return(
        <div className={className}>
            <p>{promoText}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="14" viewBox="0 0 57 14" fill="none">
                <path d="M0 7H54" stroke="#1C2A39" strokeWidth="2"/>
                <path d="M48 1L55 7L48 13" stroke="#1C2A39" strokeWidth="2"/>
            </svg>
        </div>
    )
}