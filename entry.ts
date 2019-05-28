import pdfjs, {PDFPageProxy} from 'pdfjs-dist';
import './node_modules/pdfjs-dist/web/pdf_viewer.css';

const {PDFPageView} = require('pdfjs-dist/web/pdf_viewer.js');

async function renderInViewer(pdfPage: PDFPageProxy) {
  const pdfPageViewer = new PDFPageView({
    container: document.getElementById('viewerContainer'),
    defaultViewport: pdfPage.getViewport(1),
  });

  pdfPageViewer.setPdfPage(pdfPage);
  await pdfPageViewer.draw()
}


async function loadPdf() {
  const pdf = await pdfjs.getDocument('http://localhost:46345/sample.pdf').promise
  const page = await pdf.getPage(2);
  renderInViewer(page);
}

loadPdf();
