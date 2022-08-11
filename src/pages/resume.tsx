import {NextPageWithLayout} from "./_app";
import React, {ReactElement, useEffect, useState} from "react";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import PageLayout from "../components/Layout/PageLayout";
import {ResumeLink} from "../components/pdf-viewer"
const PDFViewer = dynamic(import('../components/pdf-viewer'), { ssr: false });

function Header(): JSX.Element {
        return (
            <>
            <div className="flex flex-col items-end">
                <a href={ResumeLink} target="_blank" rel='noreferrer' className="btn-sapphire">
                    <FontAwesomeIcon icon={faFileDownload} className="mr-2"/>
                    <span>Download</span>
                </a>
            </div>
            </>
        );
}

const Resume: NextPageWithLayout<any> = () => {
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
                <PageLayout pageTitle="Resume" headerContent={Header()} pageCSS="max-w-5xl shadow-xl border-4 mb-6 flex justify-center bg-white w-max">
                    {page}
                </PageLayout>
            </Layout>
        </>
    )
}

export default Resume;