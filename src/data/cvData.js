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
};

export default cvData;
