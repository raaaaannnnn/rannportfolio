import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Instagram, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: 'id' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-900">
          <div className="text-center sm:text-left">
            <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
              {PERSONAL_INFO.name}
              <span className="text-indigo-600 dark:text-indigo-400">.</span>
            </span>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm">
              {PERSONAL_INFO.major[lang]} · {PERSONAL_INFO.university}
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
              title={lang === 'id' ? 'Kembali ke atas' : 'Back to top'}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'id' ? 'Ke Atas' : 'Top'}</span>
            </button>
          </div>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Hak Cipta Dilindungi.
          </p>

          <p className="flex items-center gap-1 text-zinc-400 dark:text-zinc-500">
            <span>Dirancang dengan React 19, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
