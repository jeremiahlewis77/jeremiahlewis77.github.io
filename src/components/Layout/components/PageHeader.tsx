type Header = {
    title: string,
    children?: JSX.Element,
}

const PageHeader = ({title, children}: Header) => {
    return (
        <>
            <div className="p-8">
                <div className="flex flex-row justify-between max-w-5xl mx-auto">
                    <h2 className="text-sapphire font-bold text-left text-6xl">{title}</h2>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PageHeader;