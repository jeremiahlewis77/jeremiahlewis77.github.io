type BadgeBase = {
    children: string,
    backgroundColor?: string,
    textColor?: string,
    css?: string,
}
type BadgeWithoutLink = {
    isClickable?: false,
    href?: never,
} & BadgeBase;

type BadgeWithLink = {
    isClickable: true,
    href: string,
} & BadgeBase;

type Badge = BadgeWithLink | BadgeWithoutLink

const Badge = ({children, backgroundColor, textColor, css, isClickable, href}: Badge) => {
    textColor = textColor ? textColor : (isClickable ? "text-black hover:text-white" : "text-black")
    backgroundColor = backgroundColor ? backgroundColor : (isClickable ? "bg-gray-300 hover:bg-sapphire" : "bg-gray-300")

    if (isClickable) {
        return (
            <a href={href} className={`font-medium px-2 py-1 rounded max-w-fit transition ease-in-out cursor-pointer ${backgroundColor} ${textColor} ${css ? css : ""}`}>
                {children}
            </a>
    )} else {
        return (
            <span className={`font-medium px-2 py-1 rounded max-w-fit ${backgroundColor} ${textColor} ${css ? css : ""}`}>
                {children}
            </span>
        )
    }
};

interface BadgeGroup {
    children: JSX.Element[]
    className?: string
}
const BadgeGroup = ({children, className}: BadgeGroup) => {
    return (
        <div className={`flex space-x-2 ${className}`}>
            {children}
        </div>
    )
};


export {Badge, BadgeGroup};