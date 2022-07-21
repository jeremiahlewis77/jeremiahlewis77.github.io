import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
import ResumeLink from "../public/Resume.pdf"
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function PDFViewer({ size }) {
    const [file, setFile] = useState("../public/Resume.pdf");
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

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
