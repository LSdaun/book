
export function Button({onClick, buttonText}){
    return(
        <button className="button" onClick={onClick}>{buttonText}</button>
    )
}