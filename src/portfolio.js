/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// Greeting Section

const illustration = {
  animated: false
};

const greeting = {
  username: "SarathKumar Krishna Sha",
  title: "Hi all, I'm Sarath",
  subTitle: emoji(
    "Business Data Analyst skilled in SQL, Python, Power BI, process automation, reporting, and business intelligence 📈 Passionate about transforming data into actionable insights that drive operational efficiency and business growth."
  ),
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sarathkumarkrishnasha132-ctrl",
  linkedin:
    "https://www.linkedin.com/in/sarathkumar-krishna-sha-408553ab/",
  display: true
};

// Skills Section

const skillsSection = {
  title: "About Me",

  subTitle:
    "Business Data Analyst with 5+ years of experience supporting data-driven organizations through analytics, reporting, and process improvement initiatives. Skilled in data analysis, data validation, source-to-target mapping, data lineage documentation, and end-to-end data flow management across complex business environments. Proven ability to translate business requirements into actionable insights, collaborate with cross-functional teams, and communicate findings effectively to both technical and non-technical stakeholders.",
  skills: [
    emoji("📊 Profile: Business Data Analyst"),

    emoji(
      "🏢 Domain: Electronics, Healthcare, Operations, Supply Chain / Logistics, Retail, and Finance"
    ),

    emoji(
      "⚙️ Other Skills: Alteryx, SAP, JIRA, JDE, COUPA, Stakeholder Management, Requirement Gathering, UAT Coordination, Process Mapping"
    ),

    emoji(
      "🚀 Interests: Analytics, Process Optimization, Business Strategy, and AI"
    ),

    emoji(
      "🎯 Hobbies: Cricket, Football, Music Production, Fitness, and Rapping"
    )
  ],

  softwareSkills: [
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "Seneca College",
      subHeader: "Post-Graduate Diploma in Data Analytics",
      duration: "2019 - 2020"
    },

    {
      schoolName: "Fleming College",
      subHeader: "Post-Graduate Diploma in Project Management",
      duration: "2018 - 2019"
    },

    {
      schoolName: "Anna University",
      subHeader:
        "Bachelor's Degree in Electrical and Electronics Engineering",
      duration: "2013 - 2017"
    }
  ]
};

// Tech Stack

const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack:
        "SQL & Database Querying (PostgreSQL / MySQL / SQL Server)",
      progressPercentage: "90%"
    },

    {
      Stack: "Data Visualization (Power BI / Tableau)",
      progressPercentage: "95%"
    },

    {
      Stack: "Python (Pandas / NumPy / Matplotlib)",
      progressPercentage: "80%"
    },

    {
      Stack: "Statistical Analysis",
      progressPercentage: "85%"
    },

    {
      Stack: "Cloud Analytics & Data Platforms (AWS / Azure)",
      progressPercentage: "80%"
    },

    {
      Stack: "Business, Systems & Process Analysis",
      progressPercentage: "95%"
    },

    {
      Stack: "AI & Generative AI Tools",
      progressPercentage: "75%"
    }
  ],

  displayCodersrank: false
};

// Work Experience

const workExperiences = {
  display: true,

  experience: [
    {
      role: "Business Data Analyst",

      company: "Baxter Corporation Canada",

      date: "Sep 2022 - Dec 2025",

      desc:
        "Supported analytics, reporting, process improvement, and business operations initiatives through automation, dashboarding, and cross-functional collaboration.",

      descBullets: [
        "Automated calendar upload workflows for 2,000+ customers, reducing manual processing effort by 95% and improving operational efficiency",

        "Reduced operational spend by 20% through OTM implementation, routing optimization, and process improvement initiatives",

        "Improved reporting accuracy by 50% by combining multiple data sources into centralized dashboards and automated reporting solutions",

        "Led end-to-end testing coordination for JDE modules during company divestiture across QA, UAT, and Production environments, managing defect tracking, validation, and deployment readiness to ensure successful zero-downtime go-live execution",

        "Managed a $20M operations portfolio through COUPA, performing cost assessments and financial analysis across labour, assets, and operational overheads"
      ]
    },

    {
      role: "Logistics & Supply Chain Analyst",

      company: "Samsung Electronics Canada",

      date: "Jan 2021 - Sep 2022",

      desc:
        "Managed monitors and display supply chain operations through logistics coordination, reporting, ERP system support, and operational monitoring.",

      descBullets: [
        "Managed day-to-day supply chain and logistics operations supporting Samsung monitors and display product lines",

        "Coordinated with internal teams, vendors, carriers, and distribution partners to ensure operational continuity and timely issue resolution",

        "Monitored inbound and outbound logistics activities, shipment tracking, and operational performance",

        "Maintained and validated SAP and ERP system data to support reporting accuracy and operational consistency",

        "Supported reporting, operational tracking, and cross-functional coordination initiatives"
      ]
    }
  ]
};

// Open Source

const openSource = {
  showGithubProfile: false,
  display: false
};

// Big Projects

const bigProjects = {
  title: "Projects",

  subtitle:
    "Analytics, reporting, dashboarding, and operational improvement initiatives.",

  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),

      projectName: "Supply Chain Operations Dashboard",

      projectDesc:
        "Built operational dashboards and reporting workflows to support logistics monitoring, KPI tracking, and business decision-making.",

      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    },

    {
      image: require("./assets/images/nextuLogo.webp"),

      projectName: "Business Reporting Automation",

      projectDesc:
        "Developed centralized reporting and automated operational tracking solutions using analytics and visualization tools.",

      footerLink: [
        {
          name: "View Project",
          url: "#"
        }
      ]
    }
  ],

  display: true
};

// Achievements

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),

  subtitle:
    "Operational achievements, analytics initiatives, and business impact highlights.",

  achievementsCards: [
    {
      title: "Process Optimization & Automation",

      subtitle:
        "Improved operational workflows, reporting accuracy, and efficiency through automation and analytics initiatives.",

      image: require("./assets/images/codeInLogo.webp"),

      imageAlt: "Achievement",

      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    },

    {
      title: "Supply Chain Operations Support",

      subtitle:
        "Supported logistics monitoring, ERP reporting, and operational coordination across supply chain environments.",

      image: require("./assets/images/googleAssistantLogo.webp"),

      imageAlt: "Achievement",

      footerLink: [
        {
          name: "View Details",
          url: "#"
        }
      ]
    }
  ],

  display: true
};

// Blogs

const blogSection = {
  display: false
};

// Talks

const talkSection = {
  display: false
};

// Podcast

const podcastSection = {
  display: false
};

// Resume

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact


const contactInfo = {
  title: emoji("Please reach me at ☎️"),
  subtitle: "",
  number: "+1 647 550 5596",
  email_address: "ksarath429@yahoo.com"
};

// Twitter

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};