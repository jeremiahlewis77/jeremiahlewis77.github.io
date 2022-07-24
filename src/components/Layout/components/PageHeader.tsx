type Header = {
    title: string,
    children?: JSX.Element,
}

const PageHeader = ({title, children}: Header) => {
    return (
        <>
            <div className="p-8">
                <div className="flex flex-row justify-between max-w-5xl mx-auto items-center flex-wrap">
                    <h2 className="page-header">{title}</h2>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PageHeader;