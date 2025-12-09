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
  SiPostman 
} from "react-icons/si";

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
      X: {
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
      badges: ["Intern", "Onsite"],
      location: "Cirebon",
      title: "Software Engineer",
      icon: false,
      logoUrl: "/experience/kominfo.png",
      start: "Okt 2024",
      end: "Feb 2025",
      description:
        "* Developed a centralized village data management system (PUSDATIN) using pure PHP for local government operations. \n* Designed a responsive and user-friendly interface with Bootstrap, ensuring smooth usability across devices. \n* Executed the end-to-end development lifecycle, including requirements analysis, system design, implementation, testing, and deployment. \n* Collaborated closely with government stakeholders to ensure the system fit actual village data workflows and operational needs. \n* Enhanced efficiency in data input, processing, reporting, and documentation, significantly improving village-level administrative workflows.",
    },
    {
      company: "Niagahoster",
      href: "https://niagahoster.co.id",
      badges: ["Intern", "Remote"],
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
      badges: ["Intern", "Remote"],
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
      badges: ["Intern", "Onsite"],
      location: "Bogor",
      title: "Network Technician",
      icon: false,
      logoUrl: "/experience/bonet.png",
      start: "Okt 2020",
      end: "Dec 2020",
      description:
        "* Assisted in the installation and configuration of internet networks across various locations in Bogor City. \n* Performed CCTV system setup, including device installation, configuration, and functional testing to ensure optimal security monitoring. \n* Handled network device installation and maintenance, ensuring stable connectivity and minimizing downtime. \n* Collaborated effectively with the technical team to meet client requirements regarding network infrastructure and security systems. \n* Gained practical experience in network management, troubleshooting, and applying real-world security technology solutions.",
    },
    {
      company: "Grand Computer",
      href: "https://www.instagram.com/grandkomputer",
      badges: ["Intern", "Onsite"],
      location: "Cirebon",
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
  educationExperience: [
    {
      school: "Universitas Pendidikan Ganesha",
      href: "https://ikmi.ac.id",
      degree: "Student Exchange Program",
      icon: false,
      logoUrl: "/education/undiksha.png",
      start: "Feb 2024",
      end: "Jul 2024",
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
      technologies: [
        "React.js",
        "Next.js",
        "Leaflet.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://datadikti.vercel.app",
          icon: <Icons.globe className="size-3" />,
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
      technologies: [
        "PHP",
        "Bootstrap",
        "MySQL",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/pusdatin.png",
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
      technologies: [
        "PHP",
        "Tailwind CSS",
        "MySQL",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
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
      technologies: [
        "PHP",
        "Tailwind CSS",
        "MySQL",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
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
      technologies: [
        "React.js",
        "Tailwind CSS",
        "TMDB API",
      ],
      links: [
        {
          type: "Website",
          href: "https://movie-app-seven-orcin.vercel.app",
          icon: <Icons.globe className="size-3" />,
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
      technologies: [
        "React.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://2-three-pi.vercel.app",
          icon: <Icons.globe className="size-3" />,
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
      ],
      image: "/projects/multimedia.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;