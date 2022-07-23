import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import React, {ReactNode} from "react";
import Head from "next/head";

type LayoutProps = {
    children: ReactNode;
    title?: string
    css?: string
}

export default function Layout ({ children, title, css }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title ? title + " - Jeremiah Lewis" : "Jeremiah Lewis"}</title>
                <meta name="description" content="Portfolio website for Jeremiah Lewis"/>
            </Head>
            <div className="flex min-h-screen flex-col">
                <Header/>
                <main className={"bg-snow grow " + (css ? css : "")}>{children}</main>
                <Footer/>
            </div>
        </>
    )
}

