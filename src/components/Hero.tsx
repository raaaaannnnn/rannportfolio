import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: 'id' | 'en';
  onOpenCvModal: () => void;
  onScrollToProjects: () => void;
}

const GREETINGS = [
  { prefix: 'Halo, saya ', name: PERSONAL_INFO.name },
  { prefix: "Hi, I'm ", name: PERSONAL_INFO.name },
  { prefix: '你好，我是 ', name: PERSONAL_INFO.name },
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenCvModal, onScrollToProjects }) => {
  const [phraseIndex, setPhraseIndex] = useState<number>(lang === 'en' ? 1 : 0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    setPhraseIndex(lang === 'en' ? 1 : 0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const currentPhrase = GREETINGS[phraseIndex];
    const fullText = currentPhrase.prefix + currentPhrase.name;

    if (prefersReducedMotion) {
      setCharIndex(fullText.length);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < fullText.length) {
      timeoutId = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 75);
    } else if (!isDeleting && charIndex === fullText.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % GREETINGS.length);
      }, 320);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentGreeting = GREETINGS[phraseIndex];
  const fullGreetingText = currentGreeting.prefix + currentGreeting.name;
  const visiblePrefix = fullGreetingText.slice(
    0,
    Math.min(charIndex, currentGreeting.prefix.length)
  );
  const visibleName =
    charIndex > currentGreeting.prefix.length
      ? fullGreetingText.slice(currentGreeting.prefix.length, charIndex)
      : '';

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 dark:from-indigo-600/15 dark:to-cyan-500/10 opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-xs font-medium text-emerald-800 dark:text-emerald-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.availabilityBadge[lang]}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              <span className="sr-only">
                {lang === 'id' ? `Halo, saya ${PERSONAL_INFO.name}` : `Hi, I'm ${PERSONAL_INFO.name}`}
              </span>
              <span aria-hidden="true">
                {visiblePrefix}
                <span className="text-indigo-600 dark:text-indigo-400">
                  {visibleName}
                </span>
                <span className="inline-block w-[3px] h-[0.88em] ml-1 -mb-[0.06em] bg-indigo-600 dark:bg-indigo-400 animate-pulse rounded-full" />
                {'\u200B'}
              </span>
            </h1>

            <p className="mt-2 text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
              {PERSONAL_INFO.major[lang]} · <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{PERSONAL_INFO.university}</span>
            </p>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight leading-snug">
              {PERSONAL_INFO.heroHeadline[lang]}
            </p>

            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {PERSONAL_INFO.heroBio[lang]}
            </p>

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/25 transition-all duration-200 cursor-pointer"
              >
                <span>{lang === 'id' ? 'Lihat Proyek' : 'View Projects'}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{lang === 'id' ? 'Unduh / Preview CV' : 'Download / Preview CV'}</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-center lg:justify-start gap-5 text-zinc-500 dark:text-zinc-400">
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                {lang === 'id' ? 'Tautan Langsung:' : 'Quick Links:'}
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
                aria-label="Email Randy"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-center shrink-0">
            <div className="relative group">
              <div 
                aria-hidden="true" 
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition duration-500" 
              />
              
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden p-1.5 bg-gradient-to-br from-indigo-500/30 via-zinc-200 to-zinc-300 dark:from-indigo-600/40 dark:via-zinc-800 dark:to-zinc-700 shadow-2xl">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={`Foto Profil ${PERSONAL_INFO.fullName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-full bg-zinc-200 dark:bg-zinc-800 transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-indigo-600', 'text-white', 'text-4xl', 'font-bold');
                      parent.innerHTML = '<span>R</span>';
                    }
                  }}
                />
              </div>

              <div className="absolute -bottom-2 -right-1 sm:right-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 font-mono">
                  CS
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs font-mono text-zinc-400 dark:text-zinc-500 text-center">
              Randy · Jakarta, ID
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
