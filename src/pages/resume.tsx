import {NextPageWithLayout} from "./_app";
import React, {ReactElement, useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import PageLayout from "../components/Layout/PageLayout";
const PDFViewer = dynamic(import('../components/pdf-viewer'), { ssr: false });

function Header(): JSX.Element {
        return (
            <>
            <div className="flex flex-col items-end p-2">
                <p className="font-semibold">Most Recent Version</p>
                <a className="btn-sapphire">
                    <FontAwesomeIcon icon={faFileDownload} className="mr-2"/>
                    <span>Download</span>
                </a>
            </div>
            </>
        );
}

const Resume: NextPageWithLayout = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <>
            <PDFViewer size={width}/>
        </>
    )
}


Resume.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Layout title="Resume">
                <PageLayout PageTitle="Resume" HeaderContent={Header()}>
                    {page}
                </PageLayout>
            </Layout>
        </>
    )
}

export default Resume;