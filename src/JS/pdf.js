import { PDFDocument } from "pdf-lib";

class pdf {
    constructor()
    {
        this.created_pdf = this.setupPDF();
    }

    async  setupPDF()
    {
        const pdf = await PDFDocument.create();
        const page = pdf.addPage()
        const pdfBytes = await pdf.save()
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
        
        this.created_pdf = pdfBlob;

    }
}
export default pdf;