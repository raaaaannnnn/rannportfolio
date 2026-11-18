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
            <div className="inline-flex items-center gap-2.5">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                className="w-7 h-7 shrink-0 rounded-lg shadow-sm"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footerLogoBg" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E1B4B" />
                    <stop offset="100%" stopColor="#09090B" />
                  </linearGradient>
                  <linearGradient id="footerLogoBorder" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#818CF8" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#footerLogoBg)" stroke="url(#footerLogoBorder)" strokeWidth="2" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 15H31.5C39 15 43 19.2 43 25.3C43 30.3 39.7 34.1 34.5 35.3L43.2 49H34.5L26.2 35.8H22.8V49H15V15ZM22.8 21.6H31C34.1 21.6 35.8 23.1 35.8 25.3C35.8 27.6 34.1 29.1 31 29.1H22.8V21.6Z"
                  fill="#FFFFFF"
                />
                <circle cx="48" cy="45.5" r="3.6" fill="#6366F1" />
              </svg>
              <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
                <span className="text-indigo-600 dark:text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 max-w-sm">
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
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}.{' '}
            {lang === 'id' ? 'Hak Cipta Dilindungi.' : 'All Rights Reserved.'}
          </p>

          <p className="flex items-center gap-1 text-zinc-400 dark:text-zinc-500">
            <span>
              {lang === 'id'
                ? 'Dirancang dengan React 19, TypeScript & Tailwind CSS'
                : 'Built with React 19, TypeScript & Tailwind CSS'}
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};
