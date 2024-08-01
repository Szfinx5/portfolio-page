import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CodewarsImage from "../img/Codewars.png";
import CloudResuleChallengeImage from "../img/cloudresulechallenge.png";
import CloudResumeChallengeThumbnail from "../img/cloudresumebook-3.png";
import PortfolioImage from "../img/cvpicture.JPG";
import PortfolioThumbnail from "../img/CVicon.JPG";
import FindersImage from "../img/screenshot.JPG";
import FindersThumbnail from "../img/logo.png";
import CodeClubImage from "../img/codeclub.png";
import CodeClubThumbnail from "../img/codeclubT.png";
import DecredImage from "../img/decred_logo.png";
import DecredThumbnail from "../img/decred-dcr-logo.png";

const data = {
  name: "Gabor Havasi",
  title: "Full Stack Developer",
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

  about: `A focused, analytical and a problem solver who has been working in the IT industry since 2015. Started off in the helpdesk of RBS then moved into a software company providing CCTV monitoring solutions called Initsys as a Customer Experience Manager - the middle man between the software developers and nontechnical customers to achieve the maximum capability of the product being offered.\n
  Currently I am a Full Stack Developer for Cromwell Tools Ltd, developing their e-commerce platform using mainly Next.js and Material UI on the frontend, Node.js, Postgress and DynamoDB on the backend backed by AWS API Gateways, Cognito identity platform.\n
  I am thoroughly enjoying my work, I always ready to learn, progress and develop while utilising skills I have already gained from previous experiences.\n
  Computer Science degree educated from Hungary and moved to the UK in 2006.`,

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
      name: "Cromwell Tools Ltd, Hybrid",
      date: "2022 - present",
      title: "Full Stack Web Developer",
      description: [
        "Maintain and optimise existing codebase and developed new features to Cromwell's e-commerce platform using React/Next.js, Node.js, Redux and Material UI.",
        "Build RESTfull APIs and create backend logic to support frontend functions using Node.js and SQL on the AWS platform as Lambda functions mostly relying on AWS API Gateways, AWS Cognito, Postgress and DynamoDB.",
        "Write new test suites and update existing ones to provide a better coverage for our frontend using React Texting Library.",
      ],
    },
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
      description: ["React", "JavaScript", "Material UI", "React Testing Library"],
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
      description: [
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
      image: CodeClubImage,
      thumbnail: CodeClubThumbnail,
      title: "Code Clubs",
      caption: `Full stack class scheduling application. \nReact frontend, Node.js and Express.js backend.`,
      description: `As a team of 4, we created this class scheduling application within a week, just 2 months into our bootcamp. 
        \nMy maininly contributed to the backend, setting it up using Express router and also creating the PostgreSQL database and hosting our codebase on Heroku.\n
        Tech Stack:
          - JavaScript
          - React frontend
          - Node.js and Express backend
          - PostgresSQL database
          - Jest and Cypress testing libraries
        `,
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
