import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowRight, 
  X, 
  CheckCircle, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: 'id' | 'en';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const uniqueCategories = Array.from(
    new Map(PROJECTS_DATA.map((p) => [p.category, p.categoryLabel])).entries()
  );

  const filterTabs = [
    { id: 'all', label: lang === 'id' ? 'Semua Proyek' : 'All Projects' },
    ...uniqueCategories.map(([id, label]) => ({
      id,
      label: label[lang],
    })),
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="proyek" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'id' ? 'PROYEK & EKSPERIMEN LAB' : 'LAB PROJECTS & EXPLORATIONS'}</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              {lang === 'id' 
                ? 'Proyek Jaringan, Linux, dan Lab Mandiri' 
                : 'Networking, Linux & Self-Paced Lab Projects'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              {lang === 'id'
                ? 'Kumpulan simulasi topologi, tugas praktikum, dan eksperimen lab virtual yang saya kerjakan selama kuliah.'
                : 'A collection of topology simulations, coursework labs, and virtual homelab experiments built during university.'}
            </p>
          </div>

          {PROJECTS_DATA.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 shrink-0">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    activeFilter === tab.id
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-10 p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-center">
            <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white">
              {lang === 'id' ? 'Belum Ada Proyek' : 'No Projects Found'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
              {lang === 'id'
                ? 'Belum ada proyek yang tersedia untuk kategori ini.'
                : 'No projects are currently available in this category.'}
            </p>
          </div>
        ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-zinc-800', 'text-zinc-400');
                      parent.innerHTML = '<span class="text-xs font-mono">Topology Diagram</span>';
                    }
                  }}
                />
                
                <div className="absolute top-3 right-3 px-2 py-1 bg-zinc-950/70 backdrop-blur-md rounded-md text-[11px] font-mono text-zinc-200">
                  {project.date}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
                    {project.categoryLabel[lang]}
                  </div>

                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="mt-2 text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer line-clamp-2"
                  >
                    {project.title[lang]}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {project.shortDesc[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer py-1"
                    >
                      <span>{lang === 'id' ? 'Lihat Detail' : 'View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        title={
                          project.githubUrl.includes('colab.research.google.com')
                            ? (lang === 'id' ? 'Buka Google Colab' : 'Open Google Colab')
                            : project.githubUrl.includes('github.com')
                              ? (lang === 'id' ? 'Repositori GitHub' : 'GitHub Repository')
                              : (lang === 'id' ? 'Buka Tautan Proyek' : 'Open Project Link')
                        }
                        aria-label="Project Link"
                      >
                        {project.githubUrl.includes('github.com') ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        )}

        {selectedProject && (
          <div 
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 rounded-xl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {selectedProject.categoryLabel[lang]} · {selectedProject.date}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
                  {selectedProject.title[lang]}
                </h3>
              </div>

              <div className="mt-5 rounded-xl overflow-hidden aspect-[16/9] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <p>{selectedProject.fullDesc[lang]}</p>
                
                {selectedProject.architectureDetails && (
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                    <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{lang === 'id' ? 'Arsitektur & Spesifikasi Proyek' : 'Project Architecture & Specs'}</span>
                    </h4>
                    <p className="mt-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      {selectedProject.architectureDetails[lang]}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2.5">
                    {lang === 'id' ? 'Poin Kunci & Hasil Pengujian:' : 'Key Outcomes & Testing:'}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.keyHighlights[lang].map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-2">
                    {lang === 'id' ? 'Teknologi & Tools:' : 'Technologies & Tools:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'id' ? 'Tutup' : 'Close'}
                </button>

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
                  >
                    {selectedProject.githubUrl.includes('github.com') ? (
                      <>
                        <Github className="w-4 h-4" />
                        <span>{lang === 'id' ? 'Buka Repositori GitHub' : 'View on GitHub'}</span>
                      </>
                    ) : selectedProject.githubUrl.includes('colab.research.google.com') ? (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span>{lang === 'id' ? 'Buka Notebook Google Colab' : 'Open in Google Colab'}</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span>{lang === 'id' ? 'Buka Tautan Proyek' : 'Open Project Link'}</span>
                      </>
                    )}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
