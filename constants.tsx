
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Komal Sharma",
  tagline: "Software Engineer",
  summary: "Results-driven Mobile Application Developer with 2.5+ years of experience in building scalable cross-platform mobile applications for Android and iOS. Expert in Flutter, Firebase, and Mobile Development Technologies. Passionate about creating seamless user experiences and solving complex technical challenges.",
  email: "komal.sharma.connect@gmail.com",
  socials: {
    gmail: "mailto:komal.sharma.connect@gmail.com",
    linkedin: "https://www.linkedin.com/in/komalsharma15/",
    github: "https://github.com/KomalSharma15",
  },
  experiences: [
    {
      id: "exp1",
      company: "Hranker Educational Solutions Pvt. Ltd.",
      role: "Software Engineer",
      period: "Feb 2024 - Present",
      description: [
        "Built Flutter-based mobile applications, with 10K+ daily users with scalable cross-platform architecture",
        "Implemented REST API integration using MVVM, improving maintainability and reducing feature defects by 30%",
        "Designed offline-first data caching workflows, cutting network calls by 25% and enhancing app availability by 40%",
        "Developed an in-app video streaming platform, enabling seamless playback for 1K+ concurrent users with optimized buffering and controls",
        "Leveraged WebSockets to deliver low-latency, real-time messaging within Flutter applications",
        "Led Google Play Console deployments, managing version releases with 0 critical production failures"
      ]
    },
    {
      id: "exp2",
      company: "LongShort Labs Pvt. Ltd.",
      role: "Software Engineer",
      period: "June 2023 - Dec 2024",
      description: [
        "Developed Flutter mobile applications for HR platforms used by 5K+ enterprise users across multiple organizations",
        "Integrated backend services via REST APIs using MVC architecture, achieving 99% crash-free sessions",
        "Validated and debugged APIs with Postman, resolving 95% of defects prior to QA and release cycles",
        "Leveraged Firebase Auth, FCM, Analytics, and Database for secure authentication, real-time data handling, and user engagement",
        "Utilized Google Maps APIs and device location services to deliver accurate, real-time geolocation",
        "Contributed to Agile delivery using JIRA, shipping 20+ production features within sprint timelines"
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "SelectionWay x Test RanKING (1M+ Downloads)",
      description: "A comprehensive learning & mock-test platform",
      tags: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB"],
      link: "https://play.google.com/store/apps/details?id=com.testranker.android&pcampaignid=web_share",
      github: "https://github.com/alex/ai-summarizer",
      image: "https://play-lh.googleusercontent.com/oHpeA_STZrBuYHN7w27GUfOBh-BleLkaZWjV2xc4la2isk1-sCI6cpg-DXWDHdI6y7u-IYoovSBozVK4RwPyjD0=w480-h960-rw",
      isClientProject: true
    },
    {
      id: "p2",
      title: "Futurekul (1L+ Downloads)",
      description: "E-learning mobile application",
      tags: ["Flutter", "Dart", "Firebase", "PHP", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=com.app.futurekul&pcampaignid=web_share",
      image: "https://play-lh.googleusercontent.com/bdMlHRGy95kHvlmKJttYt3zjpdd3lT-VaFzPAp7KxCdxzEWkeliz5PLGTzlk474j8pww=w480-h960-rw",
      isClientProject: true
    },
    {
      id: "p3",
      title: "Study KD Live (1L+ Downloads)",
      description: "E-learning mobile application",
      tags: ["Flutter", "Dart", "Firebase", "PHP", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=live.kdcampus.study&pcampaignid=web_share",
      image: "https://play-lh.googleusercontent.com/bnie3enOlB0pKEBEbsLQt6p22biLk5zMc1ImP8ox5eYy1n8gBoctRMid4GBPIqgO5_7i=w480-h960-rw",
      isClientProject: true
    },
    {
      id: "p4",
      title: "Learning Niti (1L+ Downloads)",
      description: "E-learning mobile application",
      tags: ["Flutter", "Dart", "Firebase", "PHP", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=co.rios.czhgm&pcampaignid=web_share",
      image: "https://play-lh.googleusercontent.com/-WjpN4LUFtMadiYXgL5r5GQkgY42O5Buc6Kju1Vd-HgDAyjL1Jpfcaaa-WQtqUX3NQ=w480-h960-rw",
      isClientProject: true
    },
    {
      id: "p5",
      title: "Jobs Adda - The Learning Hub (1L+ Downloads)",
      description: "E-learning mobile application",
      tags: ["Flutter", "Dart", "Firebase", "PHP", "MySQL"],
      link: "https://play.google.com/store/apps/details?id=co.shield.qdrjs&pcampaignid=web_share",
      image: "https://play-lh.googleusercontent.com/r1mdoghg_lJ9e4XDKg6nHlaE6swVIngsY0hbGNXaMPfglMvTdx-v7p_rrCnOLbZiKiM=w480-h960-rw",
      isClientProject: true
    },
    {
      id: "p6",
      title: "HivePayroll",
      description: "Payroll management application",
      tags: ["Flutter", "Dart", "Firebase", "Node.js"],
      link: "https://play.google.com/store/apps/details?id=com.ITBrothersConsultingSolutionsPrivateLimited.hivepayroll&pcampaignid=web_share",
      image: "https://play-lh.googleusercontent.com/FweY5pWIx7UVlL2JLR3xxrMlkIp5aG0FZly26Viqb2yIZurnZQpw8TUOUBcddRLBWgQ=w480-h960-rw",
      isClientProject: true
    },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      skills: ["Dart", "Flutter", "Java"]
    },
    {
      category: "State Management",
      skills: ["Provider", "Riverpod", "BLoC", "GetX"]
    },
    {
      category: "Architecture",
      skills: ["MVC", "MVVM", "Clean Architecture"]
    },

    {
      category: "Database",
      skills: ["Firebase", "MySQL"]
    },
    {
      category: "APIs & Backend",
      skills: ["REST APIs", "HTTP", "Dio", "JSON Serializable", "Postman"]
    },
    {
      category: "Tools & Platforms",
      skills: ["VS Code", "Xcode", "Firebase Auth", "Firebase Firestore", "Firebase Cloud Messaging", "Firebase Crashlytics"]
    },
    {
      category: "Version Control & CI/CD",
      skills: ["Git", "GitHub", "Bitbucket"]
    },

  ],
  education: [
    {
      degree: "M.S. in Maths & Computing",
      institution: "Jamia Millia University",
      year: "2021 - 2023",
      grade: "9.06 CGPA"
    }
  ]
};
