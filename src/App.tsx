import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsExperienceSection } from './components/SkillsExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('randy_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [lang, setLang] = useState<'id' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('randy_lang') as 'id' | 'en';
      if (saved === 'id' || saved === 'en') return saved;
    }
    return 'id';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');

  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('randy_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('randy_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('randy_lang', lang);
  }, [lang]);

  useEffect(() => {
    const sectionIds = ['hero', 'tentang', 'proyek', 'sertifikasi', 'kontak'];
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const navOffset = 100;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - navOffset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.getElementById('proyek');
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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200 overflow-x-hidden">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      <main>
        <Hero
          lang={lang}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onScrollToProjects={handleScrollToProjects}
        />

        <AboutSection lang={lang} />

        <ProjectsSection lang={lang} />

        <SkillsExperienceSection lang={lang} />

        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
