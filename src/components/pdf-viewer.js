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

    function getScale(width) {
        if (width > 1024) {
            return 1.6
        } else if (width > 786) {
            return 1.4
        } else if (width > 640) {
            return 1.1
        } else {
            return 0.7
        }
    }

    return (
        <div>
            <Document file={ResumeLink} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={1} scale={getScale(size)}/>
            </Document>
        </div>
    );
}
