import TechIcon from "./TechIcon";
type TechCard = {
    technology: string,
    title: string,
    link: string,
}

type TechCardGroup = {
    children: JSX.Element[],
    className?: string,
}

const TechCard = ({technology, title, link}: TechCard) => {
    return (
        <div className={`flex flex-col bg-white md:w-32 md:h-32 w-28 h-28 p-4 rounded-lg justify-center items-center shadow-[0_4px_8px_1px_rgba(0,0,0,0.3)] text-gray-600 hover:text-gray-500 transition ease-in-out`}>
            <span className={"md:text-6xl text-5xl"}><TechIcon technology={technology} className={" "} disabled/></span>
            <a href={link} className={"text-lg font-semibold text-sapphire cursor-pointer "}>{title}</a>
        </div>
    )
};

const TechCardGroup = ({children, className}: TechCardGroup) => {
    return (
        <div className={`flex flex-wrap space-x-2 space-y-2 justify-center items-center ${className}`}>
            {children}
        </div>
    )
};



export {TechCard, TechCardGroup};