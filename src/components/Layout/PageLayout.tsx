import React, {ReactNode} from "react";
import PageHeader from "./components/PageHeader";

type PageProps = {
    PageTitle: string,
    HeaderContent?: JSX.Element,
    children: ReactNode,
    className?: string,
}

export default function PageLayout({ PageTitle, HeaderContent, children, className }: PageProps) {
    return (
        <>
            <PageHeader title={PageTitle}>{HeaderContent}</PageHeader>
            <div className={"max-w-5xl min-h-max mx-auto " + (className? className : "")}>
                {children}
            </div>
        </>
    )
}