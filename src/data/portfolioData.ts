export interface ProjectItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: string;
  categoryLabel: {
    id: string;
    en: string;
  };
  shortDesc: {
    id: string;
    en: string;
  };
  fullDesc: {
    id: string;
    en: string;
  };
  image: string;
  tags: string[];
  keyHighlights: {
    id: string[];
    en: string[];
  };
  githubUrl?: string;
  demoUrl?: string;
  architectureDetails?: {
    id: string;
    en: string;
  };
  date: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  badgeColor?: string;
}

export const PERSONAL_INFO = {
  name: "Randy",
  fullName: "Randy",
  role: {
    id: "Mahasiswa Teknik Informatika (Semester 3) · Network Enthusiast",
    en: "Computer Science Undergraduate (3rd Semester) · Network Enthusiast",
  },
  university: "Universitas Bina Nusantara (BINUS)",
  major: {
    id: "Teknik Informatika (Computer Science)",
    en: "Computer Science",
  },
  location: "Jakarta Barat",
  email: "randyorton0704@gmail.com",
  phone: "+62 896-5750-3783",
  linkedinUrl: "https://www.linkedin.com/in/rann0704/",
  githubUrl: "https://github.com/raaaaannnnn",
  instagramUrl: "https://www.instagram.com/rannxvl/",
  cvDownloadFileName: "CV_Randy_ComputerScience_BINUS.pdf",
  avatarUrl: "./images/randy.jpg",

  availabilityBadge: {
    id: "Terbuka untuk Magang Part-Time & Kolaborasi Proyek",
    en: "Open for Part-Time Internships & Project Collaborations",
  },

  heroHeadline: {
    id: "Mempelajari & Merancang Fondasi Jaringan yang Andal dan Aman.",
    en: "Learning & Building Reliable, Secure Network Foundations.",
  },

  heroBio: {
    id: "Mahasiswa aktif semester 3 Teknik Informatika BINUS University yang fokus mendalami Computer Networking, Administrasi Linux, dan dasar Keamanan Jaringan. Aktif mengeksplorasi simulasi topologi Cisco, MikroTik, serta membangun lab jaringan mandiri.",
    en: "Active 3rd-semester Computer Science student at BINUS University focusing on Computer Networking, Linux Administration, and Network Security fundamentals. Actively exploring Cisco, MikroTik topologies, and personal lab setups.",
  },

  aboutStory: {
    id: "Ketertarikan saya pada dunia komputer berawal dari rasa ingin tahu bagaimana data dapat berpindah antarperangkat dengan cepat dan aman. Memasuki semester 3 di Universitas Bina Nusantara (BINUS), saya memfokuskan eksplorasi di luar kelas pada jaringan komputer, sistem operasi Linux, dan dasar-dasar infrastruktur cloud.\n\nMelalui praktikum kampus dan eksperimen lab virtual mandiri, saya terbiasa melakukan subnetting IPv4, konfigurasi VLAN dan routing dasar menggunakan Cisco Packet Tracer maupun MikroTik, serta analisis lalu lintas jaringan. Saya antusias untuk terus belajar dan siap berkontribusi di tim IT maupun proyek kolaboratif.",
    en: "My interest in technology started with curiosity about how data moves quickly and securely across devices. Now in my 3rd semester at Bina Nusantara University (BINUS), I focus my exploration outside coursework on computer networking, Linux operating systems, and cloud infrastructure basics.\n\nThrough campus labs and virtual homelab experiments, I regularly practice IPv4 subnetting, basic VLAN and routing setup in Cisco Packet Tracer and MikroTik, and packet-level troubleshooting. I am eager to keep growing and contribute to collaborative IT teams.",
  },
};

export const QUICK_FACTS = [
  {
    label: { id: "Status Akademik", en: "Academic Status" },
    value: "Semester 3",
    subtext: { id: "BINUS University · IPK Sementara 3.52 / 4.00", en: "BINUS University · Current GPA 3.52 / 4.00" },
    highlight: "Active Student",
  },
  {
    label: { id: "Minat Utama", en: "Primary Focus" },
    value: "Computer Network",
    subtext: { id: "Routing & Switching, Linux Server & Cloud Basics", en: "Routing & Switching, Linux Server & Cloud Basics" },
    highlight: "Net & SysAdmin",
  },
  {
    label: { id: "Metode Belajar", en: "Learning Approach" },
    value: "Praktikum & Lab",
    subtext: { id: "Eksplorasi Topologi Jaringan & Linux Mandiri", en: "Self-Paced Network Topology & Linux Labs" },
    highlight: "Hands-on",
  },
  {
    label: { id: "Kesiapan Peluang", en: "Availability" },
    value: "Siap Belajar",
    subtext: { id: "Terbuka untuk Magang Awal / Part-Time IT", en: "Open for Early Internship / Part-Time IT" },
    highlight: "Fast Learner",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proyek-pertama",
    title: {
      id: "Mall Website",
      en: "Website Mall",
    },
    category: "Human Computer Interaction LAB",
    categoryLabel: {
      id: "Website & UI/UX",
      en: "Website & UI/UX",
    },
    shortDesc: {
      id: "Membangun situs web mal yang responsif dengan UI/UX yang intuitif, memastikan pengalaman yang lancar dan ramah pengguna di semua perangkat.",
      en: "Built a responsive mall website with an intuitive UI/UX, ensuring a smooth and user-friendly experience across all devices.",
    },
    fullDesc: {
      id: "Mengembangkan situs web mal yang responsif dan ramah pengguna dengan UI/UX yang lancar di desktop, tablet, dan ponsel. Berfokus pada navigasi intuitif dan penelusuran produk yang bersih.",
      en: "Developed a responsive, user-friendly mall website with a smooth UI/UX across desktop, tablet, and mobile. Focused on intuitive navigation and clean product browsing.",
    },
    image: "./images/hci.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "Figma"],
    keyHighlights: {
      id: [
        "Tata letak responsif yang menyesuaikan tampilan dengan rapi di desktop, tablet, maupun ponsel.",
        "Alur navigasi intuitif untuk mempermudah penelusuran produk, promo, dan direktori tenant mal.",
        "Penerapan prinsip Human-Computer Interaction (HCI) untuk kenyamanan membaca dan interaksi pengguna."
      ],
      en: [
        "Responsive layout adapting cleanly across desktop, tablet, and mobile screens.",
        "Intuitive navigation flow for effortless browsing of products, promotions, and mall tenants.",
        "Applied Human-Computer Interaction (HCI) principles for clear visual hierarchy and usability."
      ],
    },
    architectureDetails: {
      id: "Responsive Web Layout (Desktop, Tablet, Mobile) · Terdiri dari halaman Beranda, Katalog/Produk, Direktori Tenant, dan Informasi Mal.",
      en: "Responsive Web Layout (Desktop, Tablet, Mobile) · Structured around Home, Product Catalog, Tenant Directory, and Mall Info views.",
    },
    githubUrl: "https://github.com/raaaaannnnn/AOL-project",
    date: "2026",
  },

  {
    id: "proyek-kedua",
    title: {
      id: "Analisis Pertumbuhan",
      en: "Growth Analysis",
    },
    category: "Scientific Computing",
    categoryLabel: {
      id: "Scientific Computing",
      en: "Scientific Computing",
    },
    shortDesc: {
      id: "Menganalisis pertumbuhan produksi menggunakan metode numerik di Python untuk memodelkan dan memprediksi tren output.",
      en: "Analyzed production growth using numerical methods in Python to model and predict output trends.",
    },
    fullDesc: {
      id: "Menganalisis pertumbuhan produksi menggunakan metode numerik di Python, menerapkan teknik seperti interpolasi, pencocokan kurva, dan diferensiasi numerik untuk memodelkan tren output. Dibangun dengan Python, proyek ini memproses data produksi untuk memperkirakan tingkat pertumbuhan dan memprediksi output masa depan dengan akurasi yang lebih baik.",
      en: "Analyzed production growth using numerical methods in Python, applying techniques such as interpolation, curve fitting, and numerical differentiation to model output trends. Built with Python, the project processes production data to estimate growth rates and forecast future output with improved accuracy.",
    },
    image: "./images/sci-comp.jpg",
    tags: ["Python", "Google Colab", "Numerical Methods", "Data Analysis"],
    keyHighlights: {
      id: [
        "Menerapkan teknik interpolasi dan curve fitting untuk memodelkan pola pertumbuhan data produksi.",
        "Menggunakan diferensiasi numerik guna mengestimasi laju perubahan dan tingkat pertumbuhan output.",
        "Memprediksi proyeksi output di masa mendatang disertai visualisasi grafik tren menggunakan Python."
      ],
      en: [
        "Applied interpolation and curve fitting techniques to model production data growth patterns.",
        "Utilized numerical differentiation to estimate output growth rates and rates of change.",
        "Forecasted future output trends with visual plots built in Python & Google Colab."
      ],
    },
    architectureDetails: {
      id: "Numerical Computing Pipeline · Meliputi pemrosesan data produksi, Curve Fitting & Interpolasi, Diferensiasi Numerik, serta Prediksi & Plotting Tren.",
      en: "Numerical Computing Pipeline · Covers production data preprocessing, Curve Fitting & Interpolation, Numerical Differentiation, and Trend Forecasting.",
    },
    githubUrl: "https://colab.research.google.com/drive/1Y7_3EFlNIHiXNG9ALSbRrJe7Vwg49n0u?usp=sharing",
    date: "2026",
  },

  {
    id: "proyek-ketiga",
    title: {
      id: "Dental Link",
      en: "Dental Link",
    },
    category: "Human Computer Interaction LEC",
    categoryLabel: {
      id: "Website Dental",
      en: "Dental Website",
    },
    shortDesc: {
      id: "Sebuah situs web contoh untuk praktik kedokteran gigi yang membantu pasien dan dokter menjadwalkan janji temu secara efisien.",
      en: "A dummy dental website that helps patients and doctors schedule appointments efficiently.",
    },
    fullDesc: {
      id: "Sebuah situs web contoh untuk praktik kedokteran gigi yang dirancang untuk membantu pasien dan dokter mengelola janji temu dengan lebih efisien. Pasien dapat memesan jadwal, sementara dokter dapat melihat dan mengatur ketersediaan mereka melalui antarmuka yang sederhana dan mudah digunakan.",
      en: "A dummy dental website designed to help patients and doctors manage appointments more efficiently. Patients can book schedules, while doctors can view and organize their availability through a simple, user-friendly interface.",
    },
    image: "./images/dental.jpg",
    tags: ["Figma", "HTML", "CSS", "JavaScript"],
    keyHighlights: {
      id: [
        "Merancang antarmuka dan alur pemesanan janji temu pasien di Figma agar mudah digunakan.",
        "Mengimplementasikan tampilan web interaktif menggunakan HTML, CSS, dan JavaScript untuk penjadwalan pasien dan dokter.",
        "Menyediakan halaman ketersediaan jadwal dokter sehingga pengelolaan slot konsultasi menjadi lebih terstruktur dan efisien."
      ],
      en: [
        "Designed the UI/UX and patient appointment booking flow in Figma for an intuitive user experience.",
        "Implemented interactive web pages using HTML, CSS, and JavaScript for patient and dentist scheduling.",
        "Built a doctor availability view so consultation slots can be organized cleanly and efficiently."
      ],
    },
    architectureDetails: {
      id: "Frontend Web Prototype (Figma · HTML/CSS/JavaScript) · Terdiri dari alur Pemesanan Janji Temu Pasien, Pengaturan Ketersediaan Dokter, dan Halaman Layanan Klinik Gigi.",
      en: "Frontend Web Prototype (Figma · HTML/CSS/JavaScript) · Structured around Patient Appointment Booking, Doctor Availability Management, and Dental Clinic Service views.",
    },
    githubUrl: "https://github.com/raaaaannnnn/DentalLink",
    date: "2026",
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "sertifikat-1",
    name: "Use Generative AI for Software Development",
    issuer: "IBM SkillsBuild",
    issueDate: "2025",
    image: "./images/certif-1.jpg",
  },

  {
    id: "sertifikat-2",
    name: "IBM Granite Models for Software Development",
    issuer: "IBM SkillsBuild",
    issueDate: "2025",
    image: "./images/certif-2.jpg",
  },

  {
    id: "sertifikat-3",
    name: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM SkillsBuild",
    issueDate: "2025",
    image: "./images/certif-3.jpg",
  },
];
