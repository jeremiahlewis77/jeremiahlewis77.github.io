type TechIcon = {
    technology: string
    className?: string
    disabled?: boolean
}


const TechIcon = ({technology, className, disabled}: TechIcon) => {
    return (
        <i title={technology} className={`devicon-${technology}-plain ${className ? className : "text-gray-400 hover:text-gray-600"} ${disabled ? "" : "transition ease-in-out"}`}/>
    )
};


export default TechIcon;