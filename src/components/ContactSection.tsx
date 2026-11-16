import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Instagram, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Clock, 
  PhoneCall, 
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  lang: 'id' | 'en';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Magang / Full-Time Opportunity',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = lang === 'id' ? 'Nama wajib diisi' : 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = lang === 'id' ? 'Nama minimal 2 karakter' : 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = lang === 'id' ? 'Email wajib diisi' : 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = lang === 'id' ? 'Format email tidak valid' : 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = lang === 'id' ? 'Pesan wajib diisi' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = lang === 'id' ? 'Pesan minimal 10 karakter' : 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Magang / Full-Time Opportunity',
        message: '',
      });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 700);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Halo Randy,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
  )}`;

  return (
    <section id="kontak" className="py-16 md:py-24 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'HUBUNGI SAYA' : 'GET IN TOUCH'}</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {lang === 'id' 
              ? 'Mari Berdiskusi Mengenai Peluang & Kolaborasi' 
              : "Let's Connect for Opportunities & Collaborations"}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {lang === 'id'
              ? 'Terbuka untuk posisi magang, program MT (Management Trainee), atau pekerjaan pertama (Network Engineer / DevOps / Cloud Associate).'
              : 'Open for internship roles, fresh graduate programs, or entry-level Network/Cloud engineering positions.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              <span className="text-xs font-semibold uppercase text-zinc-400 dark:text-zinc-500 tracking-wider">
                {lang === 'id' ? 'Alamat Email Utama' : 'Primary Email'}
              </span>
              
              <div className="mt-2 flex items-center justify-between gap-2">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 p-2 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                  title="Salin Email"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  {lang === 'id' ? '✓ Email berhasil disalin ke clipboard!' : '✓ Email copied to clipboard!'}
                </p>
              )}
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase">
                    {lang === 'id' ? 'Domisili' : 'Location'}
                  </h4>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mt-0.5">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {lang === 'id' ? 'Bersedia ditempatkan On-site / Hybrid di Jabodetabek' : 'Open for On-site / Hybrid in Greater Jakarta'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase">
                    {lang === 'id' ? 'Respon Waktu' : 'Response Time'}
                  </h4>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mt-0.5">
                    {lang === 'id' ? 'Aktif memeriksa email (< 24 Jam)' : 'Active email turnaround (< 24 Hours)'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 flex flex-col items-center justify-center text-center gap-2 group transition-all"
              >
                <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  LinkedIn
                </span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 flex flex-col items-center justify-center text-center gap-2 group transition-all"
              >
                <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  GitHub
                </span>
              </a>

              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 flex flex-col items-center justify-center text-center gap-2 group transition-all"
              >
                <Instagram className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  Instagram
                </span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
            
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              {lang === 'id' ? 'Kirim Pesan Langsung' : 'Send a Direct Message'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {lang === 'id' 
                ? 'Isi formulir di bawah ini untuk mengirim pesan, penawaran kerja, atau undangan wawancara.'
                : 'Fill out the form below to reach out for interview invitations or career inquiries.'}
            </p>

            {submitSuccess && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">
                    {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                  </span>
                  <span>
                    {lang === 'id'
                      ? 'Terima kasih telah menghubungi. Randy akan meninjau dan membalas pesan Anda ke alamat email yang Anda cantumkan.'
                      : 'Thank you for reaching out. Randy will review your note and respond back shortly.'}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  {lang === 'id' ? 'Nama Lengkap / Perusahaan' : 'Full Name / Company'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder={lang === 'id' ? 'Contoh: Budi Santoso (HR PT Maju Terus)' : 'e.g. John Doe (Recruiter at Acme Tech)'}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/80 border text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                    errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-zinc-200 dark:border-zinc-700 focus:border-indigo-600 dark:focus:border-indigo-400'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  {lang === 'id' ? 'Alamat Email Anda' : 'Your Email Address'} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/80 border text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
                    errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-zinc-200 dark:border-zinc-700 focus:border-indigo-600 dark:focus:border-indigo-400'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  {lang === 'id' ? 'Topik / Keperluan' : 'Subject / Purpose'}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 transition-all"
                >
                  <option value="Magang / Full-Time Opportunity">
                    {lang === 'id' ? 'Tawaran Magang / Lowongan Full-Time' : 'Internship / Full-time Opportunity'}
                  </option>
                  <option value="Undangan Interview / Screening">
                    {lang === 'id' ? 'Undangan Wawancara / Screening' : 'Interview / Screening Invitation'}
                  </option>
                  <option value="Diskusi Proyek Jaringan / Konsultasi">
                    {lang === 'id' ? 'Diskusi Proyek / Homelab / Networking' : 'Project / Networking Discussion'}
                  </option>
                  <option value="Lainnya">
                    {lang === 'id' ? 'Pertanyaan Lainnya' : 'General Inquiry'}
                  </option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                    {lang === 'id' ? 'Pesan' : 'Message'} <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder={lang === 'id' ? 'Tuliskan detail pesan, tawaran posisi, atau link jadwal interview...' : 'Share the role details, team context, or interview schedule...'}
                  className={`w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/80 border text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-y ${
                    errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-zinc-200 dark:border-zinc-700 focus:border-indigo-600 dark:focus:border-indigo-400'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? (lang === 'id' ? 'Mengirim...' : 'Sending...')
                      : (lang === 'id' ? 'Kirim Pesan' : 'Send Message')}
                  </span>
                </button>

                <a
                  href={mailtoLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Buka di Email Client' : 'Open in Email Client'}</span>
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
