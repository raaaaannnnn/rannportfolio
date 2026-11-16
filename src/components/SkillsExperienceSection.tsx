import React, { useState } from 'react';
import { 
  ExternalLink, 
  ShieldCheck,
  X,
  ZoomIn
} from 'lucide-react';
import { CERTIFICATIONS_DATA, CertificationItem } from '../data/portfolioData';

interface SkillsExperienceProps {
  lang: 'id' | 'en';
}

export const SkillsExperienceSection: React.FC<SkillsExperienceProps> = ({ lang }) => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="sertifikasi" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'SERTIFIKASI' : 'CERTIFICATES'}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {lang === 'id' 
              ? 'Sertifikat & Kursus' 
              : 'Certificates & Courses'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {lang === 'id'
              ? 'Daftar sertifikat pelatihan dan kursus yang telah saya selesaikan.'
              : 'Overview of completed training certificates and courses.'}
          </p>
        </div>

        {CERTIFICATIONS_DATA.length === 0 ? (
          <div className="mt-8 p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 text-center animate-in fade-in duration-200">
            <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              {lang === 'id' ? 'Sertifikasi' : 'Certificates'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
              {lang === 'id'
                ? 'Daftar sertifikat pelatihan dan kursus akan ditampilkan di sini.'
                : 'Completed training certificates and courses will be displayed here.'}
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {CERTIFICATIONS_DATA.map((cert) => {
              const hasValidImage = Boolean(cert.image) && !failedImages[cert.id];

              return (
                <div
                  key={cert.id}
                  className="group rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {cert.image && (
                      <div
                        onClick={() => hasValidImage && setSelectedCert(cert)}
                        className={`relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-800 overflow-hidden border-b border-zinc-100 dark:border-zinc-800 ${
                          hasValidImage ? 'cursor-pointer' : ''
                        }`}
                      >
                        {hasValidImage ? (
                          <>
                            <img
                              src={cert.image}
                              alt={cert.name}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={() =>
                                setFailedImages((prev) => ({ ...prev, [cert.id]: true }))
                              }
                            />
                            <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-zinc-900/95 text-xs font-semibold text-zinc-900 dark:text-white shadow-md">
                                <ZoomIn className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                                {lang === 'id' ? 'Lihat Sertifikat' : 'View Certificate'}
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500 gap-2 p-4">
                            <ShieldCheck className="w-8 h-8 text-indigo-500/70" />
                            <span className="text-xs font-medium text-center">
                              {cert.name}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                          {lang === 'id' ? 'Selesai' : 'Completed'} · {cert.issueDate}
                        </span>
                      </div>

                      <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-white leading-snug">
                        {cert.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {cert.issuer}
                      </p>

                      {cert.credentialId && (
                        <div className="mt-4 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                          <span className="text-[10px] font-semibold uppercase text-zinc-400 dark:text-zinc-500 block">
                            Credential ID:
                          </span>
                          <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                            {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {(cert.credentialUrl || hasValidImage) && (
                    <div className="px-6 pb-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
                      {hasValidImage && (
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>{lang === 'id' ? 'Lihat Gambar' : 'Preview Image'}</span>
                        </button>
                      )}

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                        >
                          <span>{lang === 'id' ? 'Verifikasi Kredensial' : 'Verify Credential'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      {selectedCert && selectedCert.image && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
                  {selectedCert.name}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {selectedCert.issuer} · {selectedCert.issueDate}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-w-full max-h-[72vh] rounded-lg object-contain shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
