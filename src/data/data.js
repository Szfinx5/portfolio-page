import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const data = {
  name: "Gabor Havasi",
  title: "Junior Software Engineer",
  address: "\nDerby, East Midlands",

  social: {
    github: {
      link: "https://github.com/Szfinx5",
      text: "\nhttps://github.com/Szfinx5",
      icon: <GitHubIcon />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/gabor-havasi-derby/",
      text: "\ngabor-havasi-derby",
      icon: <LinkedInIcon />,
    },
    twitter: {
      link: "https://twitter.com/szfinx5",
      text: "\nhttps://twitter.com/szfinx5",
      icon: <TwitterIcon />,
    },
    skype: {
      link: "skype:live:gabor.havasi?chat",
      text: "\nlive:gabor.havasi",
    },
  },

  about: `A focused, analytical and a problem solver who has been working in the IT industry since 2015. Started off in the helpdesk of RBS then moved into a software company providing CCTV monitoring solutions called Initsys as a Customer Experience Manager - the middle man between the software developers and non-technical customers to achieve the maximum capability of the product being offered. Computer Science degree educated from Hungary and moved to the UK in 2006.\n
  My passion is software engineering, hence I seriously took on the 16 week, full-time, fully-immersive programming bootcamp with School of Code to be able to gain more skills and experience while working collaboratively with like minded people in various teams to solve a wide range of problems. I have thoroughly enjoyed the course and couldn't wait to get stuck in a junior software engineer role within a progressive company where there's a scope to learn, progress and develop while utilising skills I have already gained from previous experiences.`,

  interests: [
    {
      name: "Learning",
      description:
        "In my free time, I like learning new technical skills, anything from programming languages to computer networking",
    },
    {
      name: "DIY",
      description:
        "I am happy to plan and build something new, such as garden offices during the pandemic to increase our comfort while working from home",
    },
    {
      name: "Personal finances",
      description:
        "I am always on top of our family finances, I like to have a review of our cashflow and investments on a monthly basis.",
    },
  ],
  schools: [
    {
      name: "School of Code",
      date: "2022",
      description: "Full Stack Web Developer bootcamp",
    },
    {
      name: "University of Obuda, Hungary",
      date: "2001 - 2005",
      description: "BCs in Technical Management",
    },
    {
      name: "University of Obuda, Hungary",
      date: "1998 - 2001",
      description: "Computer science and IT",
    },
  ],

  work: [
    {
      name: "School of Code, Remote",
      date: "2022",
      title: "Full Stack Web Developer",
      description: [
        "Learning agile and test-driven web development practices and languages",
        "Breaking down technical and logical problems and solving them",
        "Developing solutions in teams or pair-programming environments mainly in JavaScript and SQL, using Node.JS runtime environment and React, Express libraries",
        "Learning Cloud computing practices mainly on AWS and deploying solutions",
        "Creating and deploying Serverless backends using Lambda functions, API Gateways, and DynamoDB",
      ],
    },
    {
      name: "Initsys Ltd, Derby",
      date: "2017 - 2022",
      title: "Customer Experience Manager",
      description: [
        "Collate and analyse customer data, queries, and IT ticket-related issues and provide solutions to the problems",
        "Manage customers databases, provide tools and MySQL queries for reporting",
        "First point of contact when it comes to testing Initsys software and providing feedback to the developers together with recommendations",
        "Updating customers' IT systems on-site or remotely",
        "Deliver internal and external training for new and existing FTSE100 and SME customers either face to face or online",
      ],
    },
    {
      name: "Royal Bank of Scotland, Kegworth",
      date: "2015 - 2017",
      title: "IT service Desk Analyst",
      description: [
        "Continuously delivering great customer service in line with the bank People Standard",
        "Efficiently providing remote support on Windows operating system and virtualised environments to achieve the required First Point of Contact resolution SLA",
        "Answering colleague calls/emails, logging incidents appropriately, and capturing accurate information",
        "Effectively managing time to achieve agreed SLAs",
      ],
    },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      date: "2022 - 2025",
      description: "AWS CCP",
    },
    {
      name: "Cisco Certified Network Administrator",
      date: "2013 - 2025",
      description: "CCNA",
    },
    {
      name: "Responsive Web Design",
      date: "2022 - 2025",
      description: "freeCodeCamp",
    },
  ],

  skills: [
    {
      title: "Front-end",
      description: ["React", "JavaScript"],
    },

    {
      title: "Back-end",
      description: ["Node.js", "Express.js", "Jest"],
    },

    {
      title: "Databases",
      description: ["MySQL", "MariaDB", "PostgreSQL"],
    },

    {
      title: "Serverless",
      description: ["AWS Lambda", "API Gateway", "DynamoDB"],
    },
  ],

  projects: [
    {
      image: "https://i.ibb.co/ZW0vcMv/screen-2.jpg",
      thumbnail: "https://i.ibb.co/ZW0vcMv/screen-2.jpg",
      title: "Finders Keepers",
      caption:
        "Full stack travel application. \nReact frontend and Serverless backend",
      description:
        "This is our final project from School of Code. As a team of 5, we completed this full stack travel application within 4 weeks. \nMy main contribution to the project was setting up the serverless backend using DynamoDB, Labmda and AWS API Gateway.",
      links: [
        {
          link: "https://github.com/Szfinx5/FindersKeepers_SoC_FinalProject",
          icon: <GitHubIcon />,
        },
        {
          link: "https://finders-keepers-soc.netlify.app/",
          icon: <OpenInBrowserIcon />,
        },
      ],
    },
    {
      image: "https://i.ibb.co/m64JKkQ/codeclub.png",
      thumbnail: "https://i.ibb.co/m64JKkQ/codeclub.png",
      title: "Code Clubs",
      caption:
        "Full stack class scheduling application. \nReact frontend, Node.js and Express.js backend.",
      description:
        "As a team of 4, we created this class scheduling application within a week, just 2 months into our bootcamp. \nMy main contribution was setting up the backend using Express router, creating the PostgreSQL database and hosting them",
      links: [
        {
          link: "https://github.com/Szfinx5/CodeClubs_SoC_ProjectWork",
          icon: <GitHubIcon />,
        },
        {
          link: "https://codeclubs.netlify.app/",
          icon: <OpenInBrowserIcon />,
        },
      ],
    },
    {
      image: "https://i.ibb.co/VqwYV9X/cloudresulechallenge.png",
      thumbnail: "https://i.ibb.co/tpymw5B/cloudresumebook.png",
      title: "The Cloud Resume Challenge",
      caption: "Building a full stack CV on AWS using AWS SAM template",
      description:
        "This is our final project from School of Code. As a team of 5, we completed this full stack travel application within 4 weeks",
      links: [
        {
          link: "https://github.com/Szfinx5/Cloud-Resume-Challenge",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.gabor-havasi.me",
          icon: <OpenInBrowserIcon />,
        },
      ],
    },
    {
      image: "https://i.ibb.co/NmCYM0w/cvpicture.jpg",
      thumbnail: "https://i.ibb.co/JjXGhJQ/cvthumb.png",
      title: "Portfolio site",
      caption: "My online detailed CV written in JavaScript with React library",
      description:
        "This is my portfolio and detailed CV website. \nI have developed it in JavaScript using React and Material-UI libraries",
      links: [
        {
          link: "https://github.com/Szfinx5/portfolio-page",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.havasi.co.uk",
          icon: <OpenInBrowserIcon />,
        },
      ],
    },
  ],
};

export default data;
