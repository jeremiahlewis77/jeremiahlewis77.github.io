type Header = {
    title: string,
    children?: JSX.Element,
    className?: string,
}

const PageHeader = ({title, children, className}: Header) => {
    return (
        <>
            <div className="p-8">
                <div className={(className == null) ? `flex flex-row justify-between max-w-5xl mx-auto items-center flex-wrap` : className}>
                    <h2 className="page-header">{title}</h2>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PageHeader;