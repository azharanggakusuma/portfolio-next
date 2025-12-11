import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  CodeIcon,
  Globe,
  GlobeIcon,
  GraduationCap,
  HomeIcon,
  NotebookIcon,
  PencilLine,
} from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiGit,
  SiNpm,
  SiPostman,
} from "react-icons/si";

export interface GalleryItem {
  image: string;
  caption: string;
  location?: string;
}

export const DATA = {
  name: "Azharangga Kusuma",
  initials: "AK",
  url: "https://azharanggakusuma.dev",
  location: "Cirebon, Indonesia",
  locationLink: "",
  description:
    "Software Developer, specializing in Web and Mobile. Passionate about building impactful solutions. Always exploring new technologies.",
  summary:
    "I’m a Software Developer with a strong interest in building practical, user-focused software solutions. With a background in [Computer Science from STMIK IKMI Cirebon](/#education), I’ve developed my skills through hands-on [internship experience and personal/open-source projects](/#experience). Outside of development, I enjoy contributing to the tech community by sharing knowledge and helping others grow.",
  avatarUrl: "/profile-circle.png",
  skills: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "PHP", icon: SiPhp },
    { name: "React Native", icon: SiReact },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "Python", icon: SiPython },
    { name: "Flask", icon: SiFlask },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Git", icon: SiGit },
    { name: "NPM", icon: SiNpm },
    { name: "Postman", icon: SiPostman },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "#education", icon: GraduationCap, label: "Education" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: GlobeIcon, label: "Contact" },
  ],
  contact: {
    email: "azharanggakusuma01@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/azharanggakusuma",
        icon: Icons.github,
        contact: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/azharanggakusuma",
        icon: Icons.linkedin,
        contact: true,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/azharangga_kusuma",
        icon: Icons.instagram,
        contact: true,
        navbar: false,
      },
      Hashnode: {
        name: "Hashnode",
        url: "https://blog.azharanggakusuma.dev",
        icon: Icons.hashnode,
        contact: false,
        navbar: false,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/azharanggakusuma",
        icon: Icons.telegram,
        contact: true,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:azharanggakusuma01@gmail.com",
        icon: Icons.email,
        contact: true,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Diskominfo Kab. Cirebon",
      href: "https://diskominfo.cirebonkab.go.id",
      badges: ["Intern", "WFO"],
      location: "Cirebon, West Java, Indonesia",
      title: "Software Engineer",
      icon: false,
      logoUrl: "/experience/kominfo.png",
      start: "Oct 2024",
      end: "Feb 2025",
      description:
        "* Developed a centralized village data management system (PUSDATIN) using pure PHP for local government operations. \n* Designed a responsive and user-friendly interface with Bootstrap, ensuring smooth usability across devices. \n* Executed the end-to-end development lifecycle, including requirements analysis, system design, implementation, testing, and deployment. \n* Collaborated closely with government stakeholders to ensure the system fit actual village data workflows and operational needs. \n* Enhanced efficiency in data input, processing, reporting, and documentation, significantly improving village-level administrative workflows.",
    },
    {
      company: "Niagahoster",
      href: "https://niagahoster.co.id",
      badges: ["Intern", "WFH"],
      location: "Remote",
      title: "UI/UX Designer",
      icon: false,
      logoUrl: "/experience/niagahoster.jpg",
      start: "Jun 2023",
      end: "Jul 2023",
      description:
        "* Studied fundamental UI/UX principles and participated in introductory Design Thinking sessions to understand user-centered design approaches. \n* Conducted user research and requirement gathering to develop accurate user personas and user journey flows. \n* Built strong design fundamentals in color theory, typography, layouting, and created prototypes to validate design ideas. \n* Designed user journeys, developed visual designs aligned with Niagahoster’s branding, and produced interactive prototypes for usability testing. \n* Applied UI/UX concepts in real-world projects, gaining hands-on experience in end-to-end design processes.",
    },
    {
      company: "Core Initiative Studio",
      href: "https://coreinitiative.id",
      badges: ["Intern", "WFH"],
      location: "Remote",
      title: "Frontend Developer",
      icon: false,
      logoUrl: "/experience/coreinitiative.jpg",
      start: "Nov 2022",
      end: "Dec 2022",
      description:
        "* Developed interactive and responsive user interfaces using JavaScript frameworks such as Vue.js, React.js, and Node.js for dynamic frontend functionality. \n* Managed development workflows using Git version control, ensuring smooth collaboration and structured code review processes. \n* Enhanced UI design and consistency by implementing Bootstrap and Tailwind CSS to create modern and optimized layouts. \n* Learned and applied CI/CD practices using tools like Docker, improving development speed and deployment reliability. \n* Integrated various external APIs into web applications to support dynamic content and real-time data rendering. \n* Performed unit testing with Jest to validate functionality, maintain code quality, and detect issues early in the development cycle.",
    },
    {
      company: "PT Bonet Utama",
      href: "https://bonet.co.id",
      badges: ["Intern", "WFO"],
      location: "Bogor, West Java, Indonesia",
      title: "Network Technician",
      icon: false,
      logoUrl: "/experience/bonet.png",
      start: "Oct 2020",
      end: "Dec 2020",
      description:
        "* Assisted in the installation and configuration of internet networks across various locations in Bogor City. \n* Performed CCTV system setup, including device installation, configuration, and functional testing to ensure optimal security monitoring. \n* Handled network device installation and maintenance, ensuring stable connectivity and minimizing downtime. \n* Collaborated effectively with the technical team to meet client requirements regarding network infrastructure and security systems. \n* Gained practical experience in network management, troubleshooting, and applying real-world security technology solutions.",
    },
    {
      company: "Grand Computer",
      href: "https://www.instagram.com/grandkomputer",
      badges: ["Intern", "WFO"],
      location: "Cirebon, West Java, Indonesia",
      title: "Computer Technician",
      icon: false,
      logoUrl: "/experience/grandcomputer.jpg",
      start: "Jan 2019",
      end: "Feb 2019",
      description:
        "* Performed installation, maintenance, and repair of computer systems to ensure stable and reliable operation. \n* Installed and configured Windows operating systems and various supporting applications according to user needs. \n* Assembled custom PC units from individual hardware components, ensuring each build met performance and quality standards. \n* Diagnosed and resolved hardware-related issues, including component failures, compatibility problems, and system malfunctions. \n* Ensured optimal device functionality through routine checks, troubleshooting, and preventative maintenance.",
    },
  ],
  education: [
    {
      school: "STMIK IKMI Cirebon",
      href: "https://ikmi.ac.id",
      degree: "Bachelor of Computer Science",
      icon: false,
      logoUrl: "/education/ikmi.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "SMK Muhammadiyah Lemahabang",
      href: "https://smkmla-crb.sch.id",
      degree: "Vocational High School Diploma",
      icon: false,
      logoUrl: "/education/smkmla.jpg",
      start: "2017",
      end: "2020",
    },
  ],
  academicExperience: [
    {
      school: "National Seminar on SISFOTEK",
      href: "https://sisfotek.org",
      degree: "Presenter",
      icon: false,
      logoUrl: "/academic/sisfotek.png",
      start: "14 Sep 2024",
      end: "14 Sep 2024",
      location: "Batam, Riau Islands, Indonesia",
      description:
        "Presented a research paper titled 'Comparative Analysis of Rice Leaf Disease Classification Models Based on MobileNetV2' at the 9th National Seminar on Information Systems and Technology (SISFOTEK), organized by the Indonesian Informatics Experts Association (IAII). The study evaluated the performance of lightweight deep learning models for early disease detection.",
      certificateUrl: "https://example.com/certificate-sisfotek",
      gallery: [
        {
          image: "/gallery/sisfotek-1.jpg",
          caption: "Sesi presentasi jurnal penelitian.",
          location: "Ruang Seminar Utama",
        },
      ],
    },
    {
      school: "Universitas Pendidikan Ganesha",
      href: "https://undiksha.ac.id",
      degree: "Student Exchange Program",
      icon: false,
      logoUrl: "/education/undiksha.png",
      start: "Feb 2024",
      end: "Jul 2024",
      location: "Buleleng, Bali, Indonesia",
      description:
        "Participated in the Merdeka Student Exchange Program (PMM) Batch 4, where I explored Balinese culture firsthand and engaged in cross-disciplinary courses that broadened my academic perspective beyond my primary field of study. This experience strengthened my adaptability, cultural awareness, and ability to learn in diverse academic environments.",
      certificateUrl:
        "https://drive.google.com/file/d/1QMQLNO2X06SVBygIOdO5EJP4sYVj8Ez2/view?usp=sharing",
      gallery: [
        {
          image: "/gallery/pmm-1.jpg",
          caption: "Presentasi budaya lokal Cirebon.",
          location: "Aula Kampus Undiksha",
        },
        {
          image: "/gallery/pmm-2.jpg",
          caption: "Kunjungan budaya ke Desa Penglipuran.",
          location: "Bangli, Bali",
        },
      ],
    },
  ],
  trainings: [
    {
      school: "Dicoding Indonesia", 
      href: "https://www.dicoding.com",
      degree: "Belajar Dasar Pemrograman Web",
      logoUrl: "/path/to/dicoding-logo.png", 
      start: "Jan 2024",
      end: "Feb 2024",
      location: "Online",
      description:
        "Mempelajari dasar-dasar HTML, CSS, dan JavaScript untuk membangun website yang responsif.",
      certificateUrl: "https://dicoding.com/certificates/...", 
      gallery: [
        {
          image: "/gallery/training-1.jpg",
          caption: "Sesi mentoring online.",
        },
      ],
    },
    {
      school: "Coursera",
      href: "https://coursera.org",
      degree: "Google IT Support Professional Certificate",
      logoUrl: "/path/to/coursera-logo.png",
      start: "Mar 2024",
      end: "Mar 2024",
      location: "Online",
      description:
        "Menyelesaikan rangkaian kursus mengenai troubleshooting, jaringan komputer, dan keamanan sistem.",
      certificateUrl: "https://coursera.org/verify/...",
      gallery: [
        {
          image: "/gallery/training-2.jpg",
          caption: "Sesi mentoring online.",
        },
      ],
    },
  ],
  projects: [
    {
      title: "DataDikti",
      href: "https://datadikti.vercel.app",
      dates: "",
      active: true,
      openSource: true,
      category: "web",
      description:
        "A web platform that provides access to academic data from PDDikti, enabling users to search and view information on students, lecturers, study programs, and higher education institutions. The system also supports detailed lookup for individual student and lecturer profiles.",
      technologies: ["React.js", "Next.js", "Leaflet.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://datadikti.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/azharanggakusuma/datadikti",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/datadikti.png",
      video: "",
    },
    {
      title: "Pusdatin Kab. Cirebon",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "web",
      description:
        "A centralized web platform built for the local government of Kabupaten Cirebon to streamline village data collection, processing, and reporting, improving accessibility and supporting more efficient decision-making through a modern, user-friendly interface.",
      technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/pusdatin.png",
      video: "",
    },
    {
      title: "Material Inventory Information System",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "web",
      description:
        "A system for PT Denis Putra Jaya Elektrik, a partner of PT PLN (Persero), designed to digitize inventory recording and automatically generate receipts, replacing the previous manual process that was inefficient and prone to errors.",
      technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/inventori.png",
      video: "",
    },
    {
      title: "SIPERJI - Library Management System",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "web",
      description:
        "A web-based system that allows students to browse available books, check book details, and manage borrowing activities efficiently.",
      technologies: ["PHP", "Tailwind CSS", "MySQL", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/siperji.png",
      video: "",
    },
    {
      title: "Modul Nusantara - Drupadi",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "web",
      description:
        "A blog platform created to document group activities, reflections, and event highlights for the Modul Nusantara Drupadi team during the PMM 4 program at Universitas Pendidikan Ganesha.",
      technologies: ["PHP", "Tailwind CSS", "MySQL", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mn-drupadi.png",
      video: "",
    },
    {
      title: "Movie App - Web-Based Film Discovery Platform",
      href: "https://movie-app-seven-orcin.vercel.app",
      dates: "",
      active: true,
      openSource: true,
      category: "web",
      description:
        "A web application that allows users to browse, search, and view detailed movie information using real-time data from the TMDB API.",
      technologies: ["React.js", "Tailwind CSS", "TMDB API"],
      links: [
        {
          type: "Website",
          href: "https://movie-app-seven-orcin.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          // Source link untuk proyek Open Source
          type: "Source",
          href: "https://github.com/azharanggakusuma/movie-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/movieapp.png",
      video: "",
    },
    {
      title: "OpenTrip – Travel Website",
      href: "https://2-three-pi.vercel.app",
      dates: "",
      active: true,
      openSource: true,
      category: "web",
      description:
        "A frontend UI slicing project that recreates a modern travel booking interface, focusing on clean layout structure, responsive design, and accurate visual implementation based on the original UI concept.",
      technologies: ["React.js", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://2-three-pi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          // Source link untuk proyek Open Source
          type: "Source",
          href: "https://github.com/azharanggakusuma/opentrip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/opentrip.png",
      video: "",
    },
    {
      title: "E-Vote - Student Voting System",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "web",
      description:
        "A digital voting platform designed to provide students with an easy and efficient way to cast their votes in extracurricular leader elections.",
      technologies: [
        "PHP",
        "Tailwind CSS",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/e-vote.png",
      video: "",
    },
    {
      title: "Extrakurikuler Multimedia",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "web",
      description:
        "An interactive web platform that allows students to register for multimedia extracurricular activities and practice their understanding through integrated quiz features.",
      technologies: [
        "PHP",
        "Bootstrap",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/multimedia.png",
      video: "",
    },
    // --- Kategori APP ---
    {
      title: "Lorem Ipsum",
      href: "",
      dates: "",
      active: true,
      openSource: true,
      category: "app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["React Native", "Expo", "Typescript", "Location API"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Lorem+Ipsum",
      video: "",
    },
    {
      title: "Lorem Ipsum",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Lorem+Ipsum",
      video: "",
    },

    // --- Kategori UI/UX ---
    {
      title: "Lorem Ipsum",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "ui/ux",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Figma", "Auto Layout", "Prototyping", "Whimsical"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Lorem+Ipsum",
      video: "",
    },
    {
      title: "Lorem Ipsum",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "ui/ux",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Figma", "UI Kits", "Wireframing", "User Flow"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Lorem+Ipsum",
      video: "",
    },
    // --- Kategori ML/DL ---
    {
      title: "Lorem Ipsum",
      href: "",
      dates: "",
      active: true,
      openSource: true,
      category: "ml/dl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Python", "TensorFlow", "Keras", "Google Colab"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Lorem+Ipsum",
      video: "",
    },
    {
      title: "Lorem Ipsum",
      href: "",
      dates: "",
      active: true,
      openSource: false,
      category: "ml/dl",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Python", "NLTK", "Scikit-Learn", "Streamlit"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://placehold.co/600x400?text=Lorem+Ipsum",
      video: "",
    },
  ],
} as const;
