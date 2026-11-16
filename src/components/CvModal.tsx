import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileCheck 
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { 
  PERSONAL_INFO, 
  CERTIFICATIONS_DATA, 
  PROJECTS_DATA
} from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, lang }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 18;
      const maxWidth = pageWidth - margin * 2;
      let y = 20;

      const ensureSpace = (needed: number) => {
        if (y + needed > pageHeight - margin) {
          doc.addPage();
          y = 20;
        }
      };

      const drawSectionTitle = (title: string) => {
        ensureSpace(14);
        y += 4;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(24, 24, 27);
        doc.text(title, margin, y);
        y += 2;
        doc.setDrawColor(212, 212, 216);
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageWidth - margin, y);
        y += 5;
      };

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      doc.setTextColor(24, 24, 27);
      doc.text(PERSONAL_INFO.fullName.toUpperCase(), margin, y);
      y += 6.5;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(79, 70, 229);
      const roleLines = doc.splitTextToSize(PERSONAL_INFO.role[lang], maxWidth);
      doc.text(roleLines, margin, y);
      y += roleLines.length * 4.5 + 1.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(82, 82, 91);
      const contactLine = `${PERSONAL_INFO.location}  |  ${PERSONAL_INFO.phone}  |  ${PERSONAL_INFO.email}`;
      const contactLines = doc.splitTextToSize(contactLine, maxWidth);
      doc.text(contactLines, margin, y);
      y += contactLines.length * 4.5 + 1.5;

      doc.setDrawColor(24, 24, 27);
      doc.setLineWidth(0.6);
      doc.line(margin, y, pageWidth - margin, y);
      y += 4;

      drawSectionTitle(lang === 'id' ? 'RINGKASAN PROFESIONAL' : 'PROFESSIONAL SUMMARY');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(63, 63, 70);
      const bioLines = doc.splitTextToSize(PERSONAL_INFO.heroBio[lang], maxWidth);
      ensureSpace(bioLines.length * 4.5 + 4);
      doc.text(bioLines, margin, y);
      y += bioLines.length * 4.5 + 2;

      drawSectionTitle(lang === 'id' ? 'PENDIDIKAN' : 'EDUCATION');
      ensureSpace(18);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(24, 24, 27);
      doc.text(PERSONAL_INFO.university, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(113, 113, 122);
      const eduDate = lang === 'id' ? '2025 - Sekarang' : '2025 - Present';
      doc.text(eduDate, pageWidth - margin, y, { align: 'right' });
      y += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(63, 63, 70);
      const eduSub =
        lang === 'id'
          ? 'S1 Teknik Informatika (Computer Science) · Semester 3 · IPK Sementara: 3.52 / 4.00'
          : 'B.Sc. in Computer Science · 3rd Semester · Current GPA: 3.52 / 4.00';
      doc.text(eduSub, margin, y);
      y += 4.5;

      const courseworkText =
        lang === 'id'
          ? 'Mata Kuliah Terkait: Computer Networks, Data Structures, Algorithm & Programming, Discrete Mathematics, Artificial Intelligence, Database Technology.'
          : 'Relevant Coursework: Computer Networks, Data Structures, Algorithm & Programming, Discrete Mathematics, Artificial Intelligence, Database Technology.';
      const courseworkLines = doc.splitTextToSize(courseworkText, maxWidth);
      ensureSpace(courseworkLines.length * 4.3 + 4);
      doc.setFontSize(9);
      doc.setTextColor(82, 82, 91);
      doc.text(courseworkLines, margin, y);
      y += courseworkLines.length * 4.3 + 2;

      if (CERTIFICATIONS_DATA.length > 0) {
        drawSectionTitle(lang === 'id' ? 'SERTIFIKAT & PELATIHAN' : 'CERTIFICATES & COURSES');
        CERTIFICATIONS_DATA.forEach((cert) => {
          const certText = `${cert.name} — ${cert.issuer}`;
          const certLines = doc.splitTextToSize(certText, maxWidth - 18);
          ensureSpace(certLines.length * 4.5 + 2);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(9.5);
          doc.setTextColor(24, 24, 27);
          doc.text(certLines, margin, y);

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(113, 113, 122);
          doc.text(cert.issueDate, pageWidth - margin, y, { align: 'right' });
          y += certLines.length * 4.5 + 1.5;
        });
      }

      if (PROJECTS_DATA.length > 0) {
        drawSectionTitle(lang === 'id' ? 'PROYEK & LAB PILIHAN' : 'SELECTED PROJECTS & LABS');
        PROJECTS_DATA.forEach((proj) => {
          const descLines = doc.splitTextToSize(proj.shortDesc[lang], maxWidth);
          const toolsText = `Tools: ${proj.tags.join(' · ')}`;
          const toolsLines = doc.splitTextToSize(toolsText, maxWidth);
          ensureSpace(6 + descLines.length * 4.3 + toolsLines.length * 4 + 4);

          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(24, 24, 27);
          doc.text(proj.title[lang], margin, y);

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(113, 113, 122);
          doc.text(proj.date, pageWidth - margin, y, { align: 'right' });
          y += 4.5;

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(63, 63, 70);
          doc.text(descLines, margin, y);
          y += descLines.length * 4.3 + 0.5;

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(79, 70, 229);
          doc.text(toolsLines, margin, y);
          y += toolsLines.length * 4 + 3;
        });
      }

      doc.save(PERSONAL_INFO.cvDownloadFileName);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                {lang === 'id' ? 'Curriculum Vitae (CV) - Pratinjau Standar ATS' : 'Curriculum Vitae (CV) - ATS Preview'}
              </h3>
              <p className="text-[11px] text-zinc-500 font-mono">
                {PERSONAL_INFO.fullName} · {PERSONAL_INFO.university}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
              title={lang === 'id' ? 'Cetak halaman CV' : 'Print CV'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? 'Cetak' : 'Print'}</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 rounded-lg shadow-sm transition-colors cursor-pointer"
              title={lang === 'id' ? 'Unduh CV dalam format PDF' : 'Download CV as PDF'}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGenerating ? (lang === 'id' ? 'Menyiapkan...' : 'Generating...') : (lang === 'id' ? 'Unduh PDF' : 'Download PDF')}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-zinc-100 dark:bg-zinc-950/90 print:p-0 print:bg-white">
          <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm print:shadow-none print:border-none print:p-0 text-zinc-900 dark:text-zinc-100 font-sans">
            
            <header className="border-b-2 border-zinc-900 dark:border-zinc-100 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {PERSONAL_INFO.fullName.toUpperCase()}
              </h1>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                {PERSONAL_INFO.role[lang]}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </header>

            <section className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                {lang === 'id' ? 'RINGKASAN PROFESIONAL' : 'PROFESSIONAL SUMMARY'}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {PERSONAL_INFO.heroBio[lang]}
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                {lang === 'id' ? 'PENDIDIKAN' : 'EDUCATION'}
              </h2>
              <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold">
                    {PERSONAL_INFO.university}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {lang === 'id'
                      ? 'S1 Teknik Informatika (Computer Science) · Semester 3 · IPK Sementara: 3.52 / 4.00'
                      : 'B.Sc. in Computer Science · 3rd Semester · Current GPA: 3.52 / 4.00'}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {lang === 'id' ? '2025 - Sekarang' : '2025 - Present'}
                </span>
              </div>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold">
                  {lang === 'id' ? 'Mata Kuliah Terkait:' : 'Relevant Coursework:'}
                </span>{' '}
                Computer Networks, Data Structures, Algorithm & Programming, Discrete Mathematics, Artificial Intelligence, Database Technology.
              </p>
            </section>

            {CERTIFICATIONS_DATA.length > 0 && (
              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                  {lang === 'id' ? 'SERTIFIKAT & PELATIHAN' : 'CERTIFICATES & COURSES'}
                </h2>
                <ul className="mt-2 space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                  {CERTIFICATIONS_DATA.map((c) => (
                    <li key={c.id} className="flex items-baseline justify-between">
                      <div>
                        <span className="font-bold">{c.name}</span> — <span>{c.issuer}</span>
                        {c.credentialId && (
                          <span className="text-zinc-500 text-[11px] font-mono ml-2">ID: {c.credentialId}</span>
                        )}
                      </div>
                      <span className="font-mono text-zinc-500">{c.issueDate}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {PROJECTS_DATA.length > 0 && (
              <section className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800 pb-1">
                  {lang === 'id' ? 'PROYEK & LAB PILIHAN' : 'SELECTED PROJECTS & LABS'}
                </h2>
                <div className="mt-3 space-y-3">
                  {PROJECTS_DATA.map((p) => (
                    <div key={p.id}>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xs sm:text-sm font-bold">
                          {p.title[lang]}
                        </h3>
                        <span className="text-xs font-mono text-zinc-500">{p.date}</span>
                      </div>
                      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                        {p.shortDesc[lang]}
                      </p>
                      <p className="mt-0.5 text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                        Tools: {p.tags.join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between">
          <span className="text-xs text-zinc-400 hidden sm:inline">
            {lang === 'id'
              ? 'Format standar ATS · Langsung terunduh sebagai file PDF.'
              : 'ATS-friendly format · Downloads directly as a PDF file.'}
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? (lang === 'id' ? 'Menyiapkan PDF...' : 'Generating PDF...') : (lang === 'id' ? 'Unduh PDF' : 'Download PDF')}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
