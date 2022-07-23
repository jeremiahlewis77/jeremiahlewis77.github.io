import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const ResumeLink = "https://raw.githubusercontent.com/jeremiahlewis77/personal-website/develop/src/public/Jeremiah%20Lewis%20-%20Resume.pdf"

export default function PDFViewer({ size }) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div>
            <Document file={ResumeLink} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} scale={size > 786 ? 1.7 : 0.6}/>
            </Document>
        </div>
    );
}
