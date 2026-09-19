const base = import.meta.env.BASE_URL || '/';

export const portfolioData = {
  personal: {
    name: "Divyanshu Sahu",
    shortName: "Divyanshu",
    avatar: `${base}model-3d-front.png`,
    avatarFront: `${base}model-3d-front.png`,
    avatarReal: `${base}model-real-photo.png`,
    avatarRight: `${base}model-3d-side-right.png`,
    avatarBack: `${base}model-3d-back.png`,
    avatarLeft: `${base}model-3d-side-left.png`,
    avatarOriginal: `${base}profile.png`,
    role: "Software Engineer & Java Backend Developer",
    secondaryRoles: [
      "Spring Boot Specialist",
      "Database Administrator (PostgreSQL/MySQL)",
      "Full-Stack Web Developer",
      "MCA Graduate"
    ],
    email: "debusahu121@gmail.com",
    phone: "+91-9651541669",
    rawPhone: "+919651541669",
    locations: {
      current: "Govindpuri, New Delhi",
      permanent: "Kanpur, Uttar Pradesh - 208004"
    },
    socials: {
      github: "https://github.com/DebuSahu",
      linkedin: "https://www.linkedin.com/in/divyanshu-sahu-08188019b/",
      email: "mailto:debusahu121@gmail.com",
      whatsapp: "https://wa.me/919651541669"
    },
    summary: "Dedicated and result-driven Software Engineer with an MCA from Jagran Institute of Management and industry experience at MapmyIndia and Railworld India. Specialized in architecting scalable backend microservices with Java and Spring Boot, engineering robust relational database solutions (PostgreSQL, MySQL, Oracle), and crafting high-performance, responsive web applications.",
    stats: [
      { label: "Industry Experience", value: "2+ Years", icon: "Briefcase" },
      { label: "Academic Excellence", value: "73% MCA", icon: "GraduationCap" },
      { label: "Completed Projects", value: "10+", icon: "Code2" },
      { label: "Tech Stack Tools", value: "15+", icon: "Layers" }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "backend", label: "Backend & Java" },
      { id: "database", label: "Databases & DBA" },
      { id: "frontend", label: "Web & Frontend" },
      { id: "tools", label: "Tools & Environment" }
    ],
    list: [
      { name: "Java (Core & Adv.)", category: "backend", level: 92, icon: "Coffee", badge: "Primary" },
      { name: "Spring Boot", category: "backend", level: 88, icon: "Flame", badge: "Core" },
      { name: "Spring Framework", category: "backend", level: 85, icon: "Box", badge: "Enterprise" },
      { name: "RESTful APIs", category: "backend", level: 90, icon: "Send", badge: "High Velocity" },
      { name: "Hibernate / JPA", category: "backend", level: 84, icon: "Layers", badge: "ORM" },
      { name: "PostgreSQL", category: "database", level: 90, icon: "Database", badge: "Specialist" },
      { name: "MySQL", category: "database", level: 92, icon: "HardDrive", badge: "Proficient" },
      { name: "Database Administration (DBA)", category: "database", level: 86, icon: "Server", badge: "Certified" },
      { name: "Database Design & Optimization", category: "database", level: 88, icon: "Cpu", badge: "High Impact" },
      { name: "Oracle SQL", category: "database", level: 80, icon: "Database", badge: "Enterprise" },
      { name: "JavaScript (ES6+)", category: "frontend", level: 88, icon: "FileCode2", badge: "Modern" },
      { name: "React.js", category: "frontend", level: 85, icon: "Atom", badge: "Reactive" },
      { name: "HTML5 & Semantic UI", category: "frontend", level: 95, icon: "Layout", badge: "Standard" },
      { name: "CSS3 & Tailwind CSS", category: "frontend", level: 92, icon: "Palette", badge: "Responsive" },
      { name: "C & C++", category: "backend", level: 80, icon: "Terminal", badge: "Foundational" },
      { name: "Git & GitHub", category: "tools", level: 90, icon: "GitBranch", badge: "VCS" },
      { name: "VS Code / NetBeans / Eclipse", category: "tools", level: 92, icon: "Laptop", badge: "IDEs" },
      { name: "Apache Tomcat / WampServer", category: "tools", level: 84, icon: "Server", badge: "Servers" },
      { name: "Figma (UI/UX Mockups)", category: "tools", level: 78, icon: "Figma", badge: "Design" },
      { name: "Agile & SDLC", category: "tools", level: 88, icon: "CheckCircle2", badge: "Workflow" }
    ]
  },

  experience: [
    {
      id: "mapmyindia-se",
      company: "MapmyIndia",
      role: "Software Engineer",
      duration: "April 2026 - Present",
      location: "New Delhi, India",
      type: "Full-Time",
      description: "Leading core backend engineering initiatives and geospatial location services architecture.",
      highlights: [
        "Architecting and optimizing high-performance Java microservices handling real-time geospatial queries.",
        "Overseeing PostgreSQL and spatial database tuning, query indexing, and connection pool management.",
        "Collaborating in agile sprints with cross-functional engineering and product units to maintain 99.9% service reliability.",
        "Conducting code reviews, enforcing design patterns, and mentoring junior developers."
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spatial DB", "REST APIs", "Microservices", "Git"]
    },
    {
      id: "mapmyindia-sa",
      company: "MapmyIndia",
      role: "Software Associate",
      duration: "February 2025 - March 2026",
      location: "New Delhi, India",
      type: "Full-Time",
      description: "Built scalable enterprise services, optimized databases, and engineered robust API integrations.",
      highlights: [
        "Developed end-to-end RESTful endpoints using Java and Spring Boot for mapping platform integrations.",
        "Managed database administration tasks including query optimization, backup routines, and schema migrations.",
        "Integrated client-facing modules with responsive web interfaces using modern JavaScript and HTML/CSS."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "JavaScript", "HTML/CSS"]
    },
    {
      id: "railworld",
      company: "RAILWORLD INDIA Pvt. Ltd",
      role: "Java Backend Developer",
      duration: "February 2024 - June 2024",
      location: "Gurugram, Haryana, India",
      type: "Full-Time / Internship",
      description: "Specialized in backend Java architecture, API security, and database integration.",
      highlights: [
        "Implemented resilient REST APIs using Spring Boot, Hibernate, and relational databases.",
        "Collaborated with frontend teams to deliver smooth client-server data synchronization.",
        "Optimized complex SQL queries reducing backend response latency by over 30%."
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Hibernate", "Postman", "Git"]
    },
    {
      id: "yhills",
      company: "YHills Edutech Pvt. Ltd",
      role: "Java Developer",
      duration: "October 2023 - December 2023",
      location: "Remote / India",
      type: "Internship",
      description: "Delivered enterprise Java modules, applied Object-Oriented principles, and performed database integrations.",
      highlights: [
        "Developed core Java applications incorporating multithreading and collection frameworks.",
        "Engineered database CRUD operations with MySQL and JDBC connectivity."
      ],
      technologies: ["Java", "JDBC", "MySQL", "Eclipse", "OOP"]
    },
    {
      id: "codsoft",
      company: "CodSoft Technologies",
      role: "Java Programmer",
      duration: "October 2023 - November 2023",
      location: "Remote / India",
      type: "Internship",
      description: "Focused on algorithm design, data structures, and interactive Java software solutions.",
      highlights: [
        "Built modular Java desktop tools with intuitive graphical interfaces.",
        "Implemented rigorous testing and edge-case handling for clean code execution."
      ],
      technologies: ["Java", "Data Structures", "Algorithms", "VS Code"]
    },
    {
      id: "octanet",
      company: "OctaNet Services Pvt. Ltd",
      role: "Web Developer",
      duration: "October 2023 - November 2023",
      location: "Remote / India",
      type: "Internship",
      description: "Engineered responsive, mobile-first web designs and interactive UI elements.",
      highlights: [
        "Crafted responsive landing pages and portals with modern CSS3 flexbox/grid and JavaScript.",
        "Ensured seamless cross-browser compatibility and optimized mobile viewport rendering."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    }
  ],

  projects: [
    {
      id: "gymnation",
      title: "GymNation",
      subtitle: "Enterprise Gym & Fitness Center Management System",
      category: "backend",
      technologies: ["Java", "NetBeans IDE", "MySQL", "JDBC", "Swing GUI"],
      icon: "Dumbbell",
      featured: true,
      imageGradient: "from-blue-600 via-indigo-600 to-purple-600",
      description: "A comprehensive enterprise desktop software platform built for gym and fitness club owners to automate member registration, subscription billing, trainer allocation, and daily attendance tracking.",
      problem: "Gym owners previously relied on error-prone paper logs or disjointed spreadsheets, resulting in missed subscription renewals, billing discrepancies, and inefficient trainer scheduling.",
      solution: "Developed an integrated Java-MySQL solution with automated renewal alerts, role-based access control (Admin vs Trainer), attendance logging, and revenue reporting.",
      features: [
        "Automated Membership Subscription & Expiry Alerts",
        "Member Profile Management with Health Metrics & Plan Types",
        "Trainer Scheduling and Shift Assignment Matrix",
        "Integrated Financial Billing & Invoice Generation",
        "Real-time SQL Attendance Logging and Analytics",
        "Secure Administrative Dashboard with Role Authentication"
      ],
      metrics: [
        { label: "Manual Effort Reduction", value: "75%" },
        { label: "Data Integrity Rate", value: "99.9%" },
        { label: "Billing Precision", value: "100%" }
      ],
      github: "https://github.com/DebuSahu/GymNation",
      liveDemo: "#"
    },
    {
      id: "reddrop",
      title: "Red Drop",
      subtitle: "Smart Blood Bank & Emergency Donation Platform",
      category: "frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma", "Responsive UI"],
      icon: "HeartPulse",
      featured: true,
      imageGradient: "from-rose-600 via-red-600 to-amber-600",
      description: "A mission-critical healthcare web application engineered to modernize blood bank operations, track live blood unit inventory across groups, and streamline emergency hospital requisition requests.",
      problem: "During medical emergencies, patients and healthcare providers waste critical hours calling individual blood banks to verify blood unit availability.",
      solution: "Designed a real-time reactive blood availability dashboard with fast donor search, blood compatibility matrix, and instant emergency requisition routing.",
      features: [
        "Live Inventory Dashboard categorized by ABO & Rh blood types",
        "Donor Registration Portal with eligibility checklist and history",
        "Emergency Hospital Requisition Workflow with instant priority tagging",
        "Interactive Blood Group Compatibility Guide (Universal Donor/Recipient)",
        "Figma-crafted clean, high-empathy healthcare design system",
        "Fully responsive mobile layout for on-the-go emergency access"
      ],
      metrics: [
        { label: "Requisition Turnaround", value: "< 2 mins" },
        { label: "Mobile Usability Score", value: "98/100" },
        { label: "Emergency Response Gain", value: "3x Faster" }
      ],
      github: "https://github.com/DebuSahu/RedDrop",
      liveDemo: "#"
    },
    {
      id: "godrive",
      title: "GoDrive",
      subtitle: "Fleet & Car Rental Operations Management System",
      category: "frontend",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "Modern UI"],
      icon: "Car",
      featured: true,
      imageGradient: "from-emerald-600 via-teal-600 to-cyan-600",
      description: "An interactive car rental management platform designed to streamline vehicle fleet management, customer reservation lifecycles, real-time availability checking, and dynamic billing.",
      problem: "Fleet rental managers struggle with overlapping reservations, manual tariff calculations, and tracking vehicle maintenance schedules.",
      solution: "Engineered an interactive web portal featuring dynamic pricing calculators based on rental duration, vehicle type filtering, and real-time fleet availability status.",
      features: [
        "Interactive Fleet Catalog with filter by Sedan, SUV, Luxury, & Economy",
        "Dynamic Tariff & Insurance Cost Calculation Engine",
        "Customer Reservation Pipeline with booking status validation",
        "Vehicle Fleet Status Manager (Available, Rented, Maintenance)",
        "Responsive Client Booking Portal with instant booking confirmation",
        "LocalStorage state persistence for seamless multi-device testing"
      ],
      metrics: [
        { label: "Booking Speed", value: "30 Secs" },
        { label: "Calculation Errors", value: "0%" },
        { label: "Fleet Visibility", value: "Real-time" }
      ],
      github: "https://github.com/DebuSahu/GoDrive",
      liveDemo: "#"
    },
    {
      id: "springboot-dba",
      title: "Enterprise REST & DBA Architecture",
      subtitle: "High-Performance Backend Microservices & Database Suite",
      category: "backend",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Hibernate"],
      icon: "Server",
      featured: false,
      imageGradient: "from-violet-600 via-purple-600 to-indigo-600",
      description: "A production-grade backend architecture showcasing microservice best practices, optimized PostgreSQL database schemas, indexing strategies, and database administration resilience.",
      problem: "High data volume applications often face database bottlenecks, slow query execution, and high memory footprints.",
      solution: "Engineered normalized relational schemas with B-Tree indexes, HikariCP connection pooling, and Spring Boot caching, achieving sub-50ms API latencies.",
      features: [
        "Optimized relational schemas with 3NF normalization and indexing",
        "Stateless JWT security authentication and role-based authorization",
        "HikariCP connection pool optimization preventing thread deadlocks",
        "Clean 3-tier architecture: Controller, Service, and Repository layers",
        "Comprehensive automated integration test coverage"
      ],
      metrics: [
        { label: "API Response Time", value: "< 45ms" },
        { label: "Query Throughput", value: "10,000+ QPS" },
        { label: "Uptime Reliability", value: "99.99%" }
      ],
      github: "https://github.com/DebuSahu",
      liveDemo: "#"
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      score: "73% First Class",
      institution: "Jagran Institute of Management",
      location: "Kanpur, Uttar Pradesh",
      period: "September 2021 - August 2023",
      details: "Specialized in Enterprise Software Engineering, Distributed Architectures, Database Management Systems, and Object-Oriented Analysis.",
      highlights: [
        "Graduated with 73% aggregate.",
        "Actively participated in Student Development Programs and code hackathons.",
        "Led team academic projects in Java and Web technologies."
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      score: "50%",
      institution: "Jagran College of Arts, Science & Commerce",
      location: "Kanpur, Uttar Pradesh",
      period: "2018 - November 2021",
      details: "Comprehensive undergraduate study covering C, C++, Data Structures, Computer Networks, and Database Management.",
      highlights: [
        "Built solid foundational knowledge in programming logic, algorithms, and SQL.",
        "Developed early web application prototypes using HTML/CSS/JavaScript."
      ]
    },
    {
      degree: "Senior Secondary / Intermediate (12th CBSE)",
      score: "50%",
      institution: "Kanya Kubja Public School",
      location: "Kanpur, Uttar Pradesh",
      period: "Passed May 2016",
      details: "Central Board of Secondary Education (CBSE) with Science and Mathematics.",
      highlights: ["Strong foundation in Mathematics and analytical logic."]
    },
    {
      degree: "High School (10th CBSE)",
      score: "70%",
      institution: "Kanya Kubja Public School",
      location: "Kanpur, Uttar Pradesh",
      period: "Passed May 2014",
      details: "Central Board of Secondary Education (CBSE).",
      highlights: ["Excellence in Mathematics, Science, and Social Studies."]
    }
  ],

  certifications: [
    {
      title: "Java Programming",
      issuer: "Yhills Edutech Pvt. Ltd",
      date: "2023",
      badge: "Backend",
      description: "Advanced Java concepts, multithreading, collections framework, and OOP design patterns."
    },
    {
      title: "Java, C, C++, HTML Certification",
      issuer: "New World Computer Institute",
      date: "2022",
      badge: "Core Programming",
      description: "Comprehensive practical training across foundational and modern systems programming languages."
    },
    {
      title: "Advance Diploma in Computer Application (ADCA)",
      issuer: "New World Computer Institute",
      date: "2021",
      badge: "Diploma",
      description: "Practical mastery of operating systems, database operations, and software application tools."
    },
    {
      title: "Student Development Program",
      issuer: "Jagran Institute of Management",
      date: "2022",
      badge: "Professional Skills",
      description: "Leadership, corporate communication, agile workflow readiness, and collaborative teamwork."
    }
  ]
};

