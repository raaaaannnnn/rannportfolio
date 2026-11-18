import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Globe, 
  FileText, 
  Send 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: 'id' | 'en';
  setLang: (val: 'id' | 'en') => void;
  activeSection: string;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  activeSection,
  onOpenCvModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'tentang', label: lang === 'id' ? 'Tentang' : 'About' },
    { id: 'proyek', label: lang === 'id' ? 'Proyek' : 'Projects' },
    { id: 'sertifikasi', label: lang === 'id' ? 'Sertifikasi' : 'Certificates' },
    { id: 'kontak', label: lang === 'id' ? 'Kontak' : 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-50/90 dark:bg-zinc-950/90 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 md:gap-8">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="w-8 h-8 shrink-0 rounded-lg shadow-sm transition-transform duration-200 group-hover:scale-105"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="navLogoBg" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1E1B4B" />
                <stop offset="100%" stopColor="#09090B" />
              </linearGradient>
              <linearGradient id="navLogoBorder" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#navLogoBg)" stroke="url(#navLogoBorder)" strokeWidth="2" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 15H31.5C39 15 43 19.2 43 25.3C43 30.3 39.7 34.1 34.5 35.3L43.2 49H34.5L26.2 35.8H22.8V49H15V15ZM22.8 21.6H31C34.1 21.6 35.8 23.1 35.8 25.3C35.8 27.6 34.1 29.1 31 29.1H22.8V21.6Z"
              fill="#FFFFFF"
            />
            <circle cx="48" cy="45.5" r="3.6" fill="#6366F1" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors">
            {PERSONAL_INFO.name}
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-400 dark:text-zinc-500 border-l border-zinc-200 dark:border-zinc-800 pl-2">
            BINUS CS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive 
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold' 
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer border border-zinc-200/60 dark:border-zinc-700/60"
            title={lang === 'id' ? 'Beralih ke Bahasa Inggris' : 'Switch to Indonesian'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="font-mono font-semibold uppercase">{lang}</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer border border-zinc-200/60 dark:border-zinc-700/60"
            title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-600" />
            )}
          </button>

          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'id' ? 'Lihat & Unduh CV' : 'View & Download CV'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
