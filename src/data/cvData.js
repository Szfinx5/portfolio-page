import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const cvData = {
  name: "Gabor Havasi",
  title: "Junior Software Engineer",
  address: "Derby, East Midlands",

  social: {
    github: {
      link: "https://github.com/Szfinx5",
      text: "Szfinx5",
      icon: <GitHubIcon />,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/gabor-havasi-derby/",
      text: "gabor-havasi-derby",
      icon: <LinkedInIcon />,
    },
    twitter: {
      link: "https://twitter.com/szfinx5",
      text: "Szfinx5",
      icon: <TwitterIcon />,
    },
  },

  about: `A focused, analytical and a problem solver who has been working in the IT industry since 2015. Started off in the helpdesk of RBS then moved into a software company providing CCTV monitoring solutions called Initsys as a Customer Experience Manager - the middle man between the software developers and non-technical customers to achieve the maximum capability of the product being offered. Computer Science degree educated from Hungary and moved to the UK in 2006.\n
  \tMy passion is software engineering, hence I seriously took on the 16 week, full-time, fully-immersive programming bootcamp with School of Code to be able to gain more skills and experience while working collaboratively with like minded people in various teams to solve a wide range of problems. I have thoroughly enjoyed the course and couldn't wait to get stuck in a junior software engineer role within a progressive company where there's a scope to learn, progress and develop while utilising skills I have already gained from previous experiences.`,

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
      title: "Full Stack Web developer",
      description: `
        - Learning agile and test-driven web development practices and languages\n
        - Breaking down technical and logical problems and solving them\n
        - Developing solutions in teams or pair-programming environments mainly in JavaScript and SQL, using Node.JS runtime environment and React, Express libraries\n
        - Learning Cloud computing practices mainly on AWS and deploying solutions\n
        - Creating and deploying Serverless backends using Lambda functions, API Gateways, and DynamoDB\n
        `,
    },
    {
      name: "Initsys Ltd, Derby",
      date: "2017 - 2022",
      title: "Customer Experience Manager",
      description: `
      - Collate and analyse customer data, queries, and IT ticket-related issues and provide solutions to the problems\n
      - Manage customers databases, provide tools and MySQL queries for reporting\n
      - First point of contact when it comes to testing Initsys software and providing feedback to the developers together with recommendations\n
      - Updating customers' IT systems on-site or remotely\n
      - Deliver internal and external training for new and existing FTSE100 and SME customers either face to face or online\n
      `,
    },
    {
      name: "Royal Bank of Scotland, Kegworth",
      date: "2015 - 2017",
      title: "IT service Desk Analyst",
      description: `
      - Continuously delivering great customer service in line with the bank People Standard\n
      - Efficiently providing remote support on Windows operating system and virtualised environments to achieve the required First Point of Contact resolution SLA\n
      - Answering colleague calls/emails, logging incidents appropriately, and capturing accurate information\n
      - Effectively managing time to achieve agreed SLAs\n
      `,
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
};

export default cvData;
