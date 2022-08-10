import React, {ReactNode} from "react";
import PageHeader from "./components/PageHeader";

interface PageProps  {
    pageTitle: string,
    headerContent?: JSX.Element,
    pageCSS?: string,
    headerCSS?: string,
    children: ReactNode,
}

export default function PageLayout({ pageTitle, headerContent, pageCSS, headerCSS, children}: PageProps) {
    return (
        <>
            <PageHeader title={pageTitle} className={headerCSS}>{headerContent}</PageHeader>
            <div className={"max-w-5xl min-h-max mx-auto " + (pageCSS ? pageCSS : "")}>
                {children}
            </div>
        </>
    )
}