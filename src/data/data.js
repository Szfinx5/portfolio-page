import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import CodewarsImage from "../img/Codewars.png";
import CloudResuleChallengeImage from "../img/cloudresulechallenge.png";
import CloudResumeChallengeThumbnail from "../img/cloudresumebook-3.png";
import PortfolioImage from "../img/cvpicture.JPG";
import PortfolioThumbnail from "../img/CVicon.JPG";
import FindersImage from "../img/screenshot.JPG";
import FindersThumbnail from "../img/logo.png";
import DecredImage from "../img/decred_logo.png";
import DecredThumbnail from "../img/decred-dcr-logo.png";
import TasteTrend from "../img/tastetrend.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const data = {
  name: "Gabor Havasi",
  title: "Full Stack Developer",
  address: "\nDerby, East Midlands",

  social: {
    email: {
      link: `mailto:gabor.havasi@gmail.com`,
      text: "\ngabor.havasi@gmail.com",
      icon: <EmailIcon />,
    },
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
    whatsapp: {
      link: `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}`,
      text: `\n${process.env.REACT_APP_WHATSAPP_NUMBER}`,
      icon: <WhatsAppIcon />,
    },
  },

  // about: `A focused, analytical and a problem solver who has been working in the IT industry since 2015. Started off in the helpdesk of RBS then moved into a software company providing CCTV monitoring solutions called Initsys as a Customer Experience Manager - the middle man between the software developers and nontechnical customers to achieve the maximum capability of the product being offered.\n
  // Currently I am a Full Stack Developer for Cromwell Tools Ltd, developing their e-commerce platform using mainly Next.js and Material UI on the frontend, Node.js, Postgress and DynamoDB on the backend backed by AWS API Gateways, Cognito identity platform.\n
  // I am thoroughly enjoying my work, I always ready to learn, progress and develop while utilising skills I have already gained from previous experiences.\n
  // Computer Science degree educated from Hungary and moved to the UK in 2006.`,
  about: `I’m a focused and analytical problem solver with experience in the IT industry since 2015. I started my career on the helpdesk at RBS before joining Initsys, a software company providing CCTV monitoring solutions, as a Customer Experience Manager. In that role, I worked closely with both developers and non-technical customers to ensure the product was used to its full potential.\n
Currently, I’m a Full Stack Developer at Bloc Digital, where I help develop BlocHub, a large scale SaaS platform. I mainly work with Next.js, TypeScript and SCSS on the frontend, Node.js, PostgreSQL and MongoDB on the backend, leveraging Docker for deployment.\n
I’m passionate about learning and growth, always eager to develop new skills while applying my existing knowledge.

Originally from Hungary, I hold a degree in Computer Science and have been living in the UK since 2006.`,
  interests: [
    {
      name: "Learning",
      // description:
      //   "In my free time, I like learning new technical skills, anything from programming languages to computer networking",
      description: `I enjoy exploring programming, especially cloud-native development and machine learning, while staying current with emerging technologies`,
    },
    {
      name: "DIY",
      // description:
      //   "I am happy to plan and build something new, such as garden offices during the pandemic to increase our comfort while working from home",
      description:
        "Enjoy planning and building projects from scratch. Recently, I designed and built garden offices, significantly improving productivity and efficiency for remote work.",
    },
    {
      name: "Personal finances",
      // description:
      //   "I am always on top of our family finances, I like to have a review of our cashflow and investments on a monthly basis.",
      description:
        "I keep a close eye on my family's finances, reviewing our cash flow and investments on a monthly basis.",
    },
    {
      name: "Martial arts",
      description:
        "Actively practicing karate, which helps me develop discipline, focus, and perseverance.",
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
      name: "Bloc Digital, on-site",
      date: "2025 - present",
      title: "Full Stack Web Developer",
      description: [
        "Maintain and optimize a large-scale SaaS codebase.",
        "Develop new features using Next.js, TypeScript, SCSS, Node.js, PostgreSQL, and MongoDB to enhance user experience and drive performance improvements.",
        "Build and maintain RESTful APIs and backend logic to support dynamic frontend operations, primarily using Node.js and MongoDB on Docker-based deployments.",
      ],
    },
    {
      name: "Cromwell Tools Ltd, Hybrid",
      date: "2022 - 2025",
      title: "Full Stack Web Developer",
      description: [
        "Maintain and optimize a large-scale e-commerce codebase, developing new features using React, Next.js, Node.js, Redux, and Material UI to enhance user experience and drive performance improvements.",
        "Build and maintain RESTful APIs and backend logic to support dynamic frontend operations, primarily using Node.js and SQL on the AWS platform (Lambda functions, AWS API Gateway, Cognito, PostgreSQL, DynamoDB).",
        "Create new test suites and improve existing ones to ensure better test coverage for frontend components, utilizing React Testing Library and Jest.",
        "Contribute to the implementation and integration of Constructor Search, an AI-driven search engine, collaborating with a cross-functional team to enhance search functionality on Cromwell’s e-commerce platforms and improve user search experience.",
      ],
    },
    {
      name: "School of Code, Remote",
      date: "2022",
      title: "Trainee Full Stack Web Developer",
      description: [
        "Developed solutions in team-based and pair-programming environments, primarily using JavaScript, SQL, Node.js, React, and Express.",
        "Gained experience in cloud computing with a focus on AWS, deploying applications and services.",
        "Built and deployed serverless backends using AWS Lambda, API Gateway, and DynamoDB.",
        "Learned agile and test-driven development practices, focusing on modern web development languages and frameworks.",
        "Analyzed and solved technical problems by breaking them down into manageable tasks.",
      ],
    },
    {
      name: "Initsys Ltd, Derby",
      date: "2017 - 2022",
      title: "IT Customer Experience Manager",
      description: [
        "Collected and analyzed customer data, queries, and IT tickets to diagnose and resolve issues promptly.",
        "Managed customer databases and generated reports using MySQL queries and custom tools for data insights.",
        "Acted as the primary contact for testing Initsys software, providing developers with detailed feedback and recommendations for product improvements.",
        "Updated customers’ IT systems both on-site and remotely to ensure optimal performance.",
        "Delivered training sessions for new and existing clients, including FTSE100 and SME companies, either in person or via online platforms.",
      ],
    },
    {
      name: "Royal Bank of Scotland, Kegworth",
      date: "2015 - 2017",
      title: "IT service Desk Analyst",
      description: [
        "Consistently delivered high-quality customer service in line with the bank’s standards.",
        "Provided efficient remote support for Windows operating systems and virtualized environments, ensuring a high rate of First Point of Contact (FPOC) resolution and meeting SLAs.",
        "Handled colleague calls and emails, accurately logging incidents and capturing detailed information for troubleshooting.",
        "Managed time effectively to meet service level agreements, balancing multiple support tasks in a fast-paced environment.",
      ],
    },
  ],

  certifications: [
    {
      name: "AWS Certified Developer",
      date: "2026 - 2029",
      description: "AWS Dev",
    },
    {
      name: "AWS Certified Machine Learning Engineer",
      date: "2025 - 2029",
      description: "AWS ML-Eng",
    },
    {
      name: "Cisco Certified Network Administrator",
      date: "2013 - 2027",
      description: "CCNA",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      date: "2022 - 2029",
      description: "AWS CCP",
    },
    {
      name: "Responsive Web Design",
      date: "2022",
      description: "freeCodeCamp",
    },
  ],

  skills: [
    {
      title: "Front-end",
      description: [
        "React/Next.JS",
        "JavaScript",
        "Material UI",
        "React Testing Library",
      ],
    },

    {
      title: "Back-end",
      description: [
        "Node.js",
        "Express.js",
        "Jest",
        "LaunchDarkly",
        "Constructor Search",
      ],
    },

    {
      title: "Databases",
      description: ["MySQL", "MariaDB", "PostgreSQL"],
    },

    {
      title: "Serverless",
      description: [
        "Terraform",
        "AWS Lambda",
        "API Gateway",
        "DynamoDB",
        "AWS S3",
        "CloudFormation",
      ],
    },
  ],

  projects: [
    {
      image: TasteTrend,
      thumbnail: TasteTrend,
      title: "TasteTrend Chat Service",
      caption: `Full stack cloud native ML application. \nReact frontend, AWS cloud native backend written in TypeScript.`,
      description: `The TasteTrend chat service is an online tool that lets you ask questions about your restaurant network’s customer reviews and get instant,
      AI-generated answers.\name It helps you quickly understand what customers are saying about your restaurants.\n
        Tech Stack:
          - TypeScript
          - AWS Bedrock
          - AWS Lambdas
          - S3 Buckets
          - AWS OpenSearch
          - API Gateway
          - Next.js
        `,
      links: [
        {
          link: "https://github.com/Szfinx5/TasteTrend",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      image: FindersImage,
      thumbnail: FindersThumbnail,
      title: "Finders Keepers",
      caption:
        "Full stack travel application. \nReact frontend and Serverless backend",
      description: `This is our final project from School of Code. As a team of 5, we completed this full stack travel application within 4 weeks. 
        \nMy main contribution to the project was setting up the serverless backend using DynamoDB, Labmda and AWS API Gateway.\n
        Tech Stack:
        - JavaScript and Node.js
        - React frontend
        - DynamoDB database
        - Lambda functions
        - AWS API Gateway (REST API)
        - Auth0 for authentication
        - CORS proxy
        `,
      links: [
        {
          link: "https://github.com/Szfinx5/FindersKeepers_SoC_FinalProject",
          icon: <GitHubIcon />,
        },
        {
          link: "https://finders-keepers-soc.netlify.app/",
          icon: <OpenInBrowserIcon />,
        },
        {
          link: "https://www.youtube.com/watch?v=uD_Z4fcToQU",
          icon: <YouTubeIcon />,
        },
      ],
    },
    {
      image: CloudResuleChallengeImage,
      thumbnail: CloudResumeChallengeThumbnail,
      title: "The Cloud Resume Challenge",
      caption: "Building a full stack CV on AWS using AWS SAM template",
      description: `This project is about building a full stack serverless CV on AWS.\n
        During the challenge, I have used the following tech:
          - DynamoDB
          - Lambda function in Python
          - REST API Gateway
          - S3 bucket for hosting
          - JavaScript
          - CloudFront template for IaC
          - Github Action for the CD/CI pipeline`,
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
      image: PortfolioImage,
      thumbnail: PortfolioThumbnail,
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

    {
      image: "https://www.codewars.com/users/Szfinx5/badges/large",
      thumbnail: CodewarsImage,
      title: "CodeWars",
      caption:
        "A coding practice website where I improve my problem solving skills in JavaScript and SQL",
      description: `In my free time to keep my problem solving skills in a good shape, I am solving JavaScript and SQL katas on CodeWars.\n
        My current level:
        Overall: 4kyu 
        JavaScript: 4kyu 
        SQL: 4kyu 
        `,
      links: [
        {
          link: "https://github.com/Szfinx5/CodeWars",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.codewars.com/users/Szfinx5",
          icon: <OpenInBrowserIcon />,
        },
      ],
    },

    {
      image: DecredImage,
      thumbnail: DecredThumbnail,
      title: "Decred (DCR)",
      caption: "Backend application to check the voting wallets block height.",
      description: `The Decred-Wallet-Status checker SSH into each virtual servers, issue a command to check the current block height then save those details in a MySQL database. Also, fetching the latest block height from the Decred block explorer API and compare this to the results from the hot wallets.\n
      Tech Stack:
        - C# 
        - MySQL database
        - Grafana dashboard
      `,
      links: [
        {
          link: "https://github.com/Szfinx5/Decred-Wallet-Status",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};

export default data;
