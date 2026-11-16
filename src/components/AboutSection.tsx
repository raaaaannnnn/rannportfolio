import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Network, 
  Users, 
  CheckCircle2, 
  BookOpen, 
  Terminal, 
  Building2 
} from 'lucide-react';
import { PERSONAL_INFO, QUICK_FACTS } from '../data/portfolioData';

interface AboutSectionProps {
  lang: 'id' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="tentang" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'TENTANG SAYA' : 'ABOUT ME'}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {lang === 'id' 
              ? 'Mengenal Latar Belakang & Filosofi Kerja Saya' 
              : 'Background, Passion & Engineering Philosophy'}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {PERSONAL_INFO.aboutStory[lang].split('\n\n').map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">
                  {lang === 'id' ? 'Pemahaman model OSI, TCP/IP & subnetting IPv4' : 'Solid OSI Model, TCP/IP & IPv4 subnetting'}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">
                  {lang === 'id' ? 'Konfigurasi dasar VLAN & routing di Packet Tracer & MikroTik' : 'Basic VLAN & routing setup in Packet Tracer & MikroTik'}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">
                  {lang === 'id' ? 'Terbiasa menggunakan Linux CLI & analisis paket Wireshark' : 'Comfortable with Linux CLI & Wireshark packet inspection'}
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs text-zinc-700 dark:text-zinc-300">
                  {lang === 'id' ? 'Dokumentasi topologi jaringan yang rapi dan mudah dipahami' : 'Clean network topology diagrams & clear documentation'}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-indigo-950/20 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                    {PERSONAL_INFO.university}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Jakarta, Indonesia · S1 Computer Science
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  {lang === 'id' ? 'Program Studi' : 'Degree / Program'}
                </span>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  {PERSONAL_INFO.major[lang]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {lang === 'id' ? 'IPK Sementara' : 'Current GPA'}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                      3.52
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">/ 4.00</span>
                  </div>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {lang === 'id' ? 'Semester 3 Aktif' : '3rd Semester'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {lang === 'id' ? 'Masa Studi' : 'Study Period'}
                  </span>
                  <p className="text-base font-bold font-mono tabular-nums text-zinc-900 dark:text-white mt-1">
                    {lang === 'id' ? '2025 - Sekarang' : '2025 - Present'}
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                    {lang === 'id' ? 'Mahasiswa Aktif' : 'Undergraduate'}
                  </span>
                </div>
              </div>

              <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800">
                <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                  {lang === 'id' ? 'Mata Kuliah Terkait: ' : 'Relevant Coursework: '}
                </span>
                Computer Networks, Data Structures, Algorithm & Programming, Discrete Mathematics, Artificial Intelligence, Database Technology.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase mb-4">
            {lang === 'id' ? 'Ringkasan Cepat untuk Rekruter & HRD' : 'Quick Highlights for Recruiters'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_FACTS.map((fact, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{fact.label[lang]}</span>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {fact.highlight}
                  </span>
                </div>
                <div className="mt-3 text-xl font-bold font-mono text-zinc-900 dark:text-white tracking-tight">
                  {fact.value}
                </div>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
                  {fact.subtext[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
